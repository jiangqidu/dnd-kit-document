import React,{ useState } from 'react'
import {createPortal} from 'react-dom'
import {
    DndContext,
    DragOverlay,
    useDraggable,
    defaultDropAnimation,
} from '@dnd-kit/core';

const defaultDropAnimationConfig = {
    ...defaultDropAnimation,
    dragSourceOpacity: 0.5,
};

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

    const dropAnimation = defaultDropAnimationConfig;

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
                <li>单节点叠加拖拽--基础</li>
                <li>大概的思路就是拖拽时，在原来的节点生成一个拖拽元素，改变css,达到一种拖拽叠加的效果</li>
                <li>具体实现参考/src/layout/demo/two/basicSetup.jsx文件即可</li>
            </ul>
            <DndContext
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragEnd}
            >
            <DraggableItem></DraggableItem>
            {createPortal(
                <DragOverlay
                    dropAnimation={dropAnimation}
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