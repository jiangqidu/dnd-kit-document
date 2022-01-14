import React,{useState} from 'react';
import {
  DndContext,
  useDraggable,
  MouseSensor, 
  TouchSensor, 
  useSensor,
  useSensors
} from '@dnd-kit/core';

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
    }} ref={setNodeRef} {...listeners} {...attributes}>拖拽节点</button>
  )

}

const Index = () => {

  const [{ translate }, setTranslate] = useState({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: { x: 15, y: 15 },
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: { x: 15, y: 15 },
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <>
      <ul>
        <li>单节点--XY轴拖拽距离限制</li>
        <li>设置useSensor里面的distance值</li>
      </ul>
      <DndContext
        sensors={sensors}
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
