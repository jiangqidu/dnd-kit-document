import React,{useState} from 'react';
import {
  DndContext,
  useDraggable
} from '@dnd-kit/core';

const defaultCoordinates = {
  x: 0,
  y: 0,
};

const DraggableItem = ({translate})=>{

  const {attributes,listeners,setNodeRef} = useDraggable({
    id: 'draggable',
  });

  const style = {
    transform:`translate(${translate.x}px,${translate.y}px)`
  }

  return (
    <button style={style} ref={setNodeRef}  {...attributes}>拖拽节点 <span style={{cursor:'move'}} {...listeners}>🐱</span></button>
  )

}

const Index = () => {

  const [{ translate }, setTranslate] = useState({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });

  return (
    <>
      <ul>
        <li>单节点--手柄拖拽</li>
        <li>将listeners附加到需要拖到的dom节点上即可</li>
      </ul>
      <DndContext 
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
