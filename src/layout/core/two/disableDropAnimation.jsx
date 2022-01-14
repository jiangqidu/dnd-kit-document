import React,{ useState } from 'react'
import {createPortal} from 'react-dom'
import {
    DndContext,
    DragOverlay,
    useDraggable
} from '@dnd-kit/core';


function DraggableItem(){
    const {setNodeRef,listeners,isDragging} = useDraggable({
        id: 'draggable-item'
    })
    return (
        <button
          ref={setNodeRef}
          {...listeners}
          style={{
            opacity: isDragging ? 0.5 : undefined,
          }}
        >拖拽节点</button>
    )
}

function BasicSetup() {

    const [isDragging, setIsDragging] = useState(false);

    function handleDragStart() {
        setIsDragging(true);
    }

    function handleDragEnd() {
        setIsDragging(false);
    }

    return (
        <>
            <ul>
                <li>单节点叠加拖拽--取消动画</li>
                <li>将dropAnimation设置为null即可</li>
            </ul>
            <DndContext
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragEnd}
            >
            <DraggableItem></DraggableItem>
            {createPortal(
                <DragOverlay
                    dropAnimation={null}
                >
                    {isDragging ? <button>拖拽节点</button> : null}
                </DragOverlay>,
                document.body
            )}
            </DndContext>
        </>
    )
}

export default BasicSetup;