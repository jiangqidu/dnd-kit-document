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
    display: 'flex',
    transform: `translate(${translate.x}px,${translate.y}px)`,
  };

  // 注意对比上一个示例的listeners放置位置
  return (
    <button type="button" style={style} ref={setNodeRef} {...attributes}>
      拖拽节点
      <span style={{ cursor: 'move' }} {...listeners}>
        <svg
          viewBox="0 0 1050 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path
            d="M245.625263 646.656a40.421053 40.421053 0 0 1-66.533052 30.854737L39.612632 559.427368a40.421053 40.421053 0 0 1 0-61.709473l139.506526-118.029474a40.421053 40.421053 0 0 1 66.56 30.82779L245.598316 485.052632H485.052632V242.526316L420.890947 242.526316a40.421053 40.421053 0 0 1-22.878315-7.087158l-3.233685-2.479158a40.421053 40.421053 0 0 1-7.275789-53.679158l2.533053-3.287579 118.029473-139.533474a40.421053 40.421053 0 0 1 58.906948-3.018105l2.829473 3.018105 118.056421 139.533474a40.421053 40.421053 0 0 1-26.947368 66.344421L656.976842 242.526316H592.842105v242.526316h218.677895v-74.536421a40.421053 40.421053 0 0 1 66.56-30.854737l139.506526 118.056421a40.421053 40.421053 0 0 1 0 61.709473l-139.533473 118.083369a40.421053 40.421053 0 0 1-66.533053-30.854737v-53.840842H592.842105v188.631579L656.976842 781.473684a40.421053 40.421053 0 0 1 30.854737 66.533053l-118.029474 139.533474a40.421053 40.421053 0 0 1-61.736421 0l-118.056421-139.533474A40.421053 40.421053 0 0 1 420.890947 781.473684h64.134737v-188.631579H245.652211z"
            fill="#707070"
          ></path>
        </svg>
      </span>
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
