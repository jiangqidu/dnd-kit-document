/**
 * iframe: true
 */

import { DndContext, useDraggable } from '@dnd-kit/core';
import React, { useState } from 'react';

interface Props {
  translate: {
    x: number;
    y: number;
  };
}

const DraggableItem = ({ translate }: Props) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: 'draggable',
  });

  const style = {
    transform: `translate(${translate.x}px,${translate.y}px)`,
  };

  return (
    <button
      type="button"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      拖拽节点
    </button>
  );
};

const DraggableStory = () => {
  // xy坐标的初始值
  const defaultCoordinates = {
    x: 0,
    y: 0,
  };

  const [{ translate }, setTranslate] = useState({
    initialTranslate: defaultCoordinates,
    translate: defaultCoordinates,
  });

  return (
    <DndContext
      // 拖拽移动
      onDragMove={({ delta }) => {
        // delta的格式为 { x:number,y:number }
        setTranslate(({ initialTranslate }) => ({
          initialTranslate,
          translate: {
            x: initialTranslate.x + delta.x,
            y: initialTranslate.y + delta.y,
          },
        }));
      }}
      // 拖拽结束
      onDragEnd={() => {
        setTranslate(({ translate }) => {
          return {
            translate,
            initialTranslate: translate,
          };
        });
      }}
      // 拖拽关闭，比如拖拽的过程中按下了键盘上的esc
      onDragCancel={() => {
        setTranslate(({ initialTranslate }) => ({
          translate: initialTranslate,
          initialTranslate,
        }));
      }}
    >
      <DraggableItem translate={translate} />
    </DndContext>
  );
};

export default DraggableStory;
