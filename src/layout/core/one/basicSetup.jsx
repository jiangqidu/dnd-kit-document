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
    <button style={style} ref={setNodeRef} {...listeners} {...attributes}>拖拽节点</button>
  )

}

const Index = () => {

  const [{ translate }, setTranslate] = useState({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });

  return (
    <>
      <ul>
        <li>单节点--基础拖拽</li>
        <li>给useDraggable传一个id，并把返回的相关值给到拖拽元素，用DndContext包裹起来</li>
        <li>onDragMove,onDragEnd,onDragCancel分别表示拖拽移动，结束，关闭等事件，并且onDragMove会返回坐标值</li>
        <li>具体实现参考/src/layout/demo/one/basic/index.jsx文件即可</li>
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
