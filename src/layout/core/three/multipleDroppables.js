import React,{useState} from 'react';
import { 
    DndContext,
    DragOverlay,
    useDroppable,
    useDraggable
} from '@dnd-kit/core';

const divStyle = {
    width: '200px',
    height: '200px',
    display: "inline-block",
    marginTop: '20px',
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

    const [parent, setParent] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    
    return (
        <>
            <ul>
                <li>单节点--拖拽放置</li>
                <li>和单节点类似，遍历数组渲染多个放置容器</li>
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
        </>
    )
}

export default BasicSetup;
