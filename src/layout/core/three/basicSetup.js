import React,{useState} from 'react';
import { 
    DndContext,
    DragOverlay,
    useDroppable
} from '@dnd-kit/core';

const divStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid #666'
}

const Droppable = () => {

    const {isOver,setNodeRef} = useDroppable("A");

    console.log(isOver);
    return (
        <div ref={setNodeRef} style={divStyle}></div>
    )
}

const BasicSetup = () => {

    const [parent, setParent] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    
    return (
        <DndContext
            onDragStart={() => setIsDragging(true)}
            onDragEnd={({ over }) => {
                setParent(over ? over.id : null);
                setIsDragging(false);
            }}
            onDragCancel={() => setIsDragging(false)}
        >
            {parent === null ? <Droppable /> : null}
           
            <DragOverlay>
                    {isDragging ? <button>拖拽节点</button> : null}
            </DragOverlay>
        </DndContext>
    )
}

export default BasicSetup;
