import React,{useState} from 'react';
import { Radio, Space } from 'antd';
import { 
    closestCenter,
    closestCorners,
    rectIntersection,
    DndContext,
    DragOverlay,
    useDroppable,
    useDraggable
} from '@dnd-kit/core';

const divStyle = {
    width: '200px',
    height: '200px',
    display: "inline-block",
    marginTop: '10px',
    marginLeft: '50px',
    overflow: 'hidden',
    border: '3px solid #666'
}

function DraggableItem() {
    const {isDragging, setNodeRef,listeners} = useDraggable({
      id: 'draggable-item',
    });
  
    return (
      <button
        ref={setNodeRef}
        {...listeners}
        style={{
          opacity: isDragging ? 0 : undefined,
        }}
      >拖拽节点</button>
    );
}

function Droppable({children,id}) {
    
    const {isOver,setNodeRef} = useDroppable({
      id,
    });

    return (
      <div
        ref={setNodeRef}
        style={{
            ...divStyle,
            borderColor:isOver ? 'red' : '#666'
        }}
      >
          {children}
      </div>
    );
  }

const BasicSetup = () => {

    const [value,setValue] = useState(()=>rectIntersection);
    const [parent, setParent] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const onChange = (e) => {
        const {value} = e.target;
        if(value === "rectIntersection"){
            setValue(()=>rectIntersection)
        }else if(value === "closestCenter"){
            setValue(()=>closestCenter)
        }else if(value === "closestCorners"){
            setValue(()=>closestCorners)
        }
    }
    
    return (
        <>
            <ul>
                <li>碰撞检测算法说明</li>
                <li>修改collisionDetection的值即可修改碰撞检测算法</li>
                <li>参数说明</li>
                <ol>
                    <li>rectangle intersection:计算两物体的边界接触</li>
                    <li>Closest center:采用两物体的中心点的最短距离计算</li>
                    <li>closestCorners:两物体的中心计算改为四角计算</li>
                </ol>
            </ul>
            <DndContext
                collisionDetection={value}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={({ over }) => {
                    setParent(over ? over.id : null);
                    setIsDragging(false);
                }}
                onDragCancel={() => setIsDragging(false)}
            >
                <div style={{width:'72px',height:'28px'}}>
                    {parent === null ? <DraggableItem /> : null}
                </div>
            
                {
                    ['A','B','C'].map( id => (
                        <Droppable key={id} id={id} dragging={isDragging}>
                            {parent === id ? <DraggableItem  /> : null}
                        </Droppable>
                    ))   
                }

                <DragOverlay>
                    {isDragging ? <button>拖拽节点</button> : null}
                </DragOverlay>

            </DndContext>
            <br />
            <Radio.Group onChange={onChange} defaultValue="rectIntersection">
                <Space direction="vertical">
                    <Radio value="rectIntersection">rectIntersection</Radio>
                    <Radio value="closestCenter">closestCenter</Radio>
                    <Radio value="closestCorners">closestCorners</Radio>
                </Space>
            </Radio.Group>    
        </>
    )
}

export default BasicSetup;
