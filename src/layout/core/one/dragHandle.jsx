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
    <button style={style} ref={setNodeRef}  {...attributes}>ææ½èç¹ <span style={{cursor:'move'}} {...listeners}>ð±</span></button>
  )

}

const Index = () => {

  const [{ translate }, setTranslate] = useState({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });

  return (
    <>
      <ul>
        <li>åèç¹--ææææ½</li>
        <li>å°listenerséå å°éè¦æå°çdomèç¹ä¸å³å¯</li>
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
