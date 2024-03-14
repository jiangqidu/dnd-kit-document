/**
 * iframe: true
 */

import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import React, { useState } from 'react';

const divStyle = {
  width: '200px',
  height: '200px',
  display: 'inline-block',
  marginLeft: '200px',
  border: '2px solid #666',
};

function DraggableItem() {
  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: 'draggable-item',
  });

  return (
    <button
      type="button"
      ref={setNodeRef}
      {...listeners}
      style={{
        opacity: isDragging ? 0 : 1,
      }}
    >
      拖拽节点
    </button>
  );
}

interface Props {
  children: React.ReactNode;
}

function Droppable({ children }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: '0',
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        ...divStyle,
        borderColor: isOver ? '#1eb99d' : '#666',
      }}
    >
      {children}
    </div>
  );
}

const DroppableStory = () => {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [isDragging, setDragging] = useState(false);

  return (
    <DndContext
      onDragStart={() => setDragging(true)}
      onDragEnd={({ over }) => {
        setParent(over ? over.id : null);
        setDragging(false);
      }}
      onDragCancel={() => setDragging(false)}
    >
      <div style={{ width: '72px', height: '28px' }}>
        {!parent && <DraggableItem />}
      </div>

      <Droppable>{parent && <DraggableItem />}</Droppable>

      <DragOverlay>
        {isDragging && <button type="button">拖拽节点</button>}
      </DragOverlay>
    </DndContext>
  );
};

export default DroppableStory;
