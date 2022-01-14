import React from 'react';
import { Divider } from 'antd';
import ReactMarkdown from 'react-markdown';

const Index = () => {
  return (
    <div>
      <h2>@dnd-kit/core</h2>
      <Divider />
      <h3>安装</h3>
      <pre>npm install @dnd-kit/core 或者 yarn add @dnd-kit/core</pre>
      <h3>主要hook介绍</h3>
      <ReactMarkdown children={`
      import {
        DndContext,
        useDraggable,
        MouseSensor,
        TouchSensor,
        useSensor,
        useSensors,
        Translate,
        Modifiers
      } from '@dnd-kit/core';

      说明如下，具体的属性和方法会结合后面的示例介绍：

      DndContext:将拖拽元素包裹起来
      DragOverlay：拖拽时在原位置生成一个相同元素，实现叠加的效果
      useDraggable：传入一个id,返回可用于拖拽的相关设置
      MouseSensor:鼠标传感器，可设置拖拽条件，如按住后XXX秒触发拖拽，在X轴/Y轴上移动XXX距离后触发拖拽等条件,
      TouchSensor:触摸传感器，同上，
      useSensor:用来接受触发的单个拖拽条件（如MouseSensor）
      useSensors:收集设置的拖拽条件，如MouseSensor和TouchSensor
      Translate：拖拽开始后，会返回鼠标的x,y轴坐标
      Modifiers：拖拽修饰符，限制物体在X轴或Y轴上拖拽移动
      `}/>
      <h2>@dnd-kit/modifiers</h2>
      <Divider />
      <h3>安装</h3>
      <pre>npm install @dnd-kit/modifiers 或者 yarn add @dnd-kit/modifiers</pre>
      <h3>主要属性介绍</h3>
      <ReactMarkdown children={`
      import {
        restrictToHorizontalAxis,
        restrictToVerticalAxis,
        restrictToWindowEdges
      } from '@dnd-kit/modifiers';

      说明如下，具体的属性和方法会结合后面的示例介绍：

      restrictToHorizontalAxis:规定只能X轴拖动
      restrictToVerticalAxis：规定只能Y轴拖动
      restrictToWindowEdges:拖拽不超过窗口大小
      `}/>
      <h2>@dnd-kit/sortable</h2>
      <Divider />
      <h3>安装</h3>
      <pre>npm install @dnd-kit/sortable 或者 yarn add @dnd-kit/sortable</pre>
      <h3>主要hook介绍</h3>
      <ReactMarkdown children={`
      import {
        AnimateLayoutChanges,
        defaultAnimateLayoutChanges,
        verticalListSortingStrategy,
      } from '@dnd-kit/sortable';
      `}/>
      <h2>@dnd-kit/utilities</h2>
      <Divider />
      <h3>安装</h3>
      <pre>npm install @dnd-kit/utilities 或者 yarn add @dnd-kit/utilities</pre>
      <h3>主要属性介绍</h3>
      <ReactMarkdown children={`
      import {CSS} from '@dnd-kit/utilities';
      CSS:简化style的拼接方式，如
      const style = {
        transform: CSS.Translate.toString(transform)
      }
      `}/>
    </div>
    
  )
}

export default Index;
