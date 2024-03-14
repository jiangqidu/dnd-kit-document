---
nav: 指南
group:
  title: 核心库
  order: 1
order: 1
---

# 介绍

先初步介绍，具体的属性和方法会结合后面的示例演示

## @dnd-kit/core

```javascript
import {
  DndContext,
  useDraggable,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  Translate,
  Modifiers,
} from '@dnd-kit/core';
```

- DndContext：将拖拽元素包裹起来
- DragOverlay：拖拽时在原位置生成一个相同元素，实现叠加的效果
- useDraggable：传入一个 id，返回可用于拖拽的相关设置
- MouseSensor：鼠标传感器，可设置拖拽条件，如按住后 XX 秒触发拖拽，在 X/Y 轴上移动 XX 距离后触发拖拽等
- TouchSensor：触摸传感器，同上
- useSensor：用来接受触发的单个拖拽条件（如 MouseSensor）
- useSensors：收集设置的拖拽条件，如 MouseSensor 和 TouchSensor
- Translate：拖拽开始后，会返回鼠标的 x,y 轴坐标
- Modifiers：拖拽修饰符，限制物体在 X 轴或 Y 轴上拖拽移动

## @dnd-kit/modifiers

```javascript
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
```

- restrictToHorizontalAxis：规定只能 X 轴拖动
- restrictToVerticalAxis：规定只能 Y 轴拖动
- restrictToWindowEdges：拖拽不超过窗口大小

## @dnd-kit/sortable

```javascript
import { SortableContext, useSortable } from '@dnd-kit/sortable';
```

- SortableContext：将拖拽排序列表包裹起来
- useSortable：主要 hooks

## @dnd-kit/utilities

```javascript
import { CSS } from '@dnd-kit/utilities';
```

- CSS：简化 style 的拼接方式
