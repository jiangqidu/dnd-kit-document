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
  width: '100px',
  height: '100px',
  display: 'inline-block',
  marginTop: '20px',
  marginLeft: '50px',
  overflow: 'hidden',
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
  id: string;
  children: React.ReactNode;
}

function Droppable({ children, id }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,
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

      {/* 这里需要给每个容器一个指定Id，并且只让当前进入容器的拖拽节点显示 */}
      {['A', 'B', 'C'].map((id) => (
        <Droppable key={id} id={id}>
          {parent === id && <DraggableItem />}
        </Droppable>
      ))}

      <DragOverlay>
        {isDragging && <button type="button">拖拽节点</button>}
      </DragOverlay>
    </DndContext>
  );
};

export default DroppableStory;
