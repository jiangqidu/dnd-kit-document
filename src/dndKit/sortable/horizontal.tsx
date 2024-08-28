/**
 * iframe: true
 */

import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';

interface SortableItemProps {
  id: string;
}

const SortableItem = (props: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    width: '120px',
    border: '1px solid rgb(207 207 207)',
    padding: '16px 8px',
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

  return (
    <DndContext
      onDragEnd={(event) => {
        const { active, over } = event;

        if (over && active) {
          if (active.id !== over.id) {
            setItems((items) => {
              const oldIndex = items.indexOf(active.id as string);
              const newIndex = items.indexOf(over.id as string);

              return arrayMove(items, oldIndex, newIndex);
            });
          }
        }
      }}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex' }}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Sortable;
