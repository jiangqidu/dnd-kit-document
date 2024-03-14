/**
 * iframe: true
 */

import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
  closestCorners,
  rectIntersection,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import React, { ChangeEvent, useState } from 'react';

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
  const [value, setValue] = useState(() => rectIntersection);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [isDragging, setDragging] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    switch (value) {
      case 'rectIntersection':
        setValue(() => rectIntersection);
        break;
      case 'closestCenter':
        setValue(() => closestCenter);
        break;
      case 'closestCorners':
        setValue(() => closestCorners);
        break;
    }
  };

  return (
    <>
      <DndContext
        collisionDetection={value}
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

      <form style={{ margin: '20px' }}>
        <label htmlFor="option1">
          rectIntersection（计算两物体的边界接触）
        </label>
        <input
          type="radio"
          name="option1"
          value="rectIntersection"
          onChange={onChange}
        />
        <br />

        <label htmlFor="option2">
          closestCenter（采用两物体的中心点的最短距离计算）
        </label>
        <input
          type="radio"
          name="option1"
          value="closestCenter"
          onChange={onChange}
        />
        <br />

        <label htmlFor="option3">
          closestCorners（两物体的中心计算改为四角计算）
        </label>
        <input
          type="radio"
          name="option1"
          value="closestCorners"
          onChange={onChange}
        />
        <br />
      </form>
    </>
  );
};

export default DroppableStory;
