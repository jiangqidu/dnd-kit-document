---
group: 目录
toc: content
order: 1
---

# dragOverlay

<a href="https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/core-draggable-components-dragoverlay--basic-setup&globals=backgrounds.grid:falsep" target="_blank">官网传送门</a>

### Basic Setup

`拖拽后在原处留下位置，松开后物体回到原处`

> 代码思路

1. 生成两个拖拽元素，一个改变透明度，一个当作拖拽节点
2. 要拖拽的元素放入**DragOverlay**
3. 监听 onDragStart 、 onDragEnd 、onDragCancel 三个事件，获取拖拽状态

<code src='../../src/dragOverlay/basic-setup.tsx'></code>

### Disable Drop Animation

`取消回到原处的动画`

> 代码思路

1. 把**dropAnimation**设置为**null**

<code src='../../src/dragOverlay/disable-drop-animation.tsx'></code>
