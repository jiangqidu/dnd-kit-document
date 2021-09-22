import React,{useState} from 'react';
import {
  DndContext,
  useDraggable
} from '@dnd-kit/core';
import ReactMarkdown from 'react-markdown';

const DraggableItem = ({translate})=>{

  const {attributes,listeners,setNodeRef} = useDraggable({
    id: 'draggable',
  });

  const style = {
    transform:`translate(${translate?.x ?? 0}px,${translate?.y ?? 0}px)`
  }

  return (
    <button style={style} ref={setNodeRef} {...listeners} {...attributes}>拖拽节点</button>
  )

}

const Index = () => {

  const [translate, setTranslate] = useState({x:0,y:0});

  return (
    <>
      <DndContext onDragMove={({delta}) => {
        setTranslate({
          x:delta.x,
          y:delta.y
        });
      }}>
        <DraggableItem translate={translate} />
      </DndContext>
      <div style={{height:300}}></div>
      <p>这是最简单的一个拖拽，下面是具体的实现代码</p>
      <ReactMarkdown children={`
      import {useState} from 'react';
      import {
        DndContext,
        useDraggable
      } from '@dnd-kit/core';

      const DraggableItem = ({translate})=>{

        const {attributes,listeners,setNodeRef} = useDraggable({
          id: 'draggable',
        });
      
        const style = {
          transform:translate(＄{translate?.x ?? 0}px,＄{translate?.y ?? 0}px)
        }
      
        return (
          <button style={style} ref={setNodeRef} {...listeners} {...attributes}>拖拽节点</button>
        )
      
      }

      const Draggable = () => {

        const [translate, setTranslate] = useState({x:0,y:0});
      
        return (
          <>
            <DndContext onDragMove={({delta}) => {
              setTranslate({
                x:delta.x,
                y:delta.y
              });
            }}>
              <DraggableItem translate={translate} />
            </DndContext>
          <>
        )
      }    
      `}/>
      <p>当然，大家肯定也发现了一些问题，但是先不着急解决这个，下面会仔细的讲解dnd kit相关api的用法，最后再解决上面的问题</p>
    </>
  )
}

export default Index;
