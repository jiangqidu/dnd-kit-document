import React,{useState} from 'react';
import { 
    DndContext,
    DragOverlay,
    useDroppable,
    useDraggable
} from '@dnd-kit/core';

const divStyle = {
    width: '300px',
    height: '300px',
    display: "inline-block",
    marginLeft: '200px',
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

function Droppable({children}) {
    
    const {isOver,setNodeRef} = useDroppable({
      id:'0',
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

    const [parent, setParent] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    
    return (
        <>
            <ul>
                <li>单节点--拖拽放置</li>
                <li>这块实现思路蛮有意思的，用到了障眼法</li>
                <ol>
                    <li>右边盒子里也有一个拖拽节点，默认隐藏</li>
                    <li>拖拽节点放置后，原生的并没有消失，还在原地</li>
                    <li>相当于左边的拖拽节点在进入放置盒子后自身隐藏，盒子内的拖拽节点显示</li>
                </ol>
                <li>主要是用到DragOverlay和useDroppable</li>
            </ul>
            <DndContext
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
            
                <Droppable dragging={isDragging}>
                    {parent !== null ? <DraggableItem  /> : null}
                </Droppable>

                <DragOverlay>
                    {isDragging ? <button>拖拽节点</button> : null}
                </DragOverlay>

            </DndContext>
        </>
    )
}

export default BasicSetup;
