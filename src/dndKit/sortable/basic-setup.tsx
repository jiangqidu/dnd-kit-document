/**
 * iframe: true
 */

import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface SortableItemProps {
  id: string;
}

const SortableItem = (props: SortableItemProps) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    width: '320px',
    marginBottom: '16px',
    border: '1px solid rgb(207 207 207)',
    padding: '16px 8px',
    opacity: isDragging ? 0.5 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      拖拽节点-{props.id}
    </div>
  );
};

const Sortable = () => {
  const [items, setItems] = useState<string[]>(['1', '2', '3']);

  const [activeId, setActiveId] = useState<null | string>(null);
  const activeIndex = activeId ? items.indexOf(activeId) : -1;

  return (
    <DndContext
      onDragStart={({ active }) => {
        if (!active) {
          return;
        }
        setActiveId(active.id as string);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);
        if (over) {
          const overIndex = items.indexOf(over.id as string);
          if (activeIndex !== overIndex) {
            setItems((items) => arrayMove(items, activeIndex, overIndex));
          }
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
      {createPortal(
        <DragOverlay>
          {activeId ? <SortableItem key={activeId} id={activeId} /> : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};

export default Sortable;
