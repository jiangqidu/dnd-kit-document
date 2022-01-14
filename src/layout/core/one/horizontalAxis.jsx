import React,{useState} from 'react';
import {
  DndContext,
  useDraggable
} from '@dnd-kit/core';
import {
  restrictToHorizontalAxis
} from '@dnd-kit/modifiers';

const defaultCoordinates = {
  x: 0,
  y: 0,
};

const DraggableItem = ({translate})=>{

  const {attributes,listeners,setNodeRef} = useDraggable({
    id: 'draggable',
  });

  return (
    <button style={{
      transform:`translate(${translate.x}px,${translate.y}px)`
    }} ref={setNodeRef} {...listeners} {...attributes}>↔拖拽节点</button>
  )

}

const Index = () => {

  const [{ translate }, setTranslate] = useState({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });

  return (
    <>
      <ul>
        <li>单节点--横向拖拽</li>
        <li>设置modifiers里面的值为restrictToHorizontalAxis</li>
      </ul>
      <DndContext
        modifiers={[restrictToHorizontalAxis]}
        onDragMove={({delta}) => {
          setTranslate(({ initialTranslate }) => ({
            initialTranslate,
            translate: {
              x: initialTranslate.x + delta.x ,
              y: initialTranslate.y + delta.y ,
            },
          }));
        }}
        onDragEnd={() => {
          setTranslate(({ translate }) => {
            return {
              translate,
              initialTranslate: translate,
            };
          });
        }}
        onDragCancel={() => {
          setTranslate(({ initialTranslate }) => ({
            translate: initialTranslate,
            initialTranslate,
          }));
        }}
      >
        <DraggableItem translate={translate} />
      </DndContext>
    </>
  )
}

export default Index;
