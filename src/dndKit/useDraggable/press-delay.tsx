/**
 * iframe: true
 */

import {
  DndContext,
  MouseSensor,
  useDraggable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { useState } from 'react';

interface Props {
  translate: {
    x: number;
    y: number;
  };
}

const DraggableItem = ({ translate }: Props) => {
  const { attributes, listeners, isDragging, setNodeRef } = useDraggable({
    id: 'draggable',
  });

  const style = {
    transform: `translate(${translate.x}px,${translate.y}px)`,
    cursor: `${isDragging ? 'move' : 'auto'}`,
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

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 1000,
      tolerance: 5,
    },
    /**
    useSensor()第一个参数可以选：Pointer，Mouse，Touch，Keyboard，依次对应：指针、鼠标、触摸屏、键盘。第二个参数就是对传感器进行设置
    activationConstraint:{
      delay：按下时间
      tolerance：用于移动端的拖拽延迟容差，比如设置为0，那你在移动端延迟时间内移动节点，拖拽会立即中止，如果设置为5，那么在延迟时间内超过5px才会中止拖拽
    }
    */
  });

  const sensors = useSensors(mouseSensor);

  return (
    <DndContext
      // 将useSensor传给DndContext
      sensors={sensors}
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
