/**
 * iframe: true
 */

import { DndContext, DragOverlay, useDraggable } from '@dnd-kit/core';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function DraggableItem() {
  const { setNodeRef, listeners, isDragging } = useDraggable({
    id: 'draggable-item',
  });
  return (
    <button
      type="button"
      ref={setNodeRef}
      {...listeners}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      拖拽节点
    </button>
  );
}

function DragOverlayExample() {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragEnd}
    >
      <DraggableItem />
      {/*
        DragOverlay：放置拖拽叠加的元素（理解成拖动到其他位置，会回到原处）
      */}
      {createPortal(
        <DragOverlay>
          {isDragging ? <button type="button">拖拽节点</button> : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
}

export default DragOverlayExample;
