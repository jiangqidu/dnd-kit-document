---
group: 目录
toc: content
order: 3
---

# sortable

<a href="https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-vertical--basic-setup" target="_blank">官网传送门</a>

### Basic Setup

`基础的列表拖拽`

> 代码思路

1. 拖拽处和容器内部都有一个拖拽节点，默认隐藏
2. 利用**onDragStart**、**onDragEnd**、**onDragCancel**获取当前的拖拽状态
3. 根据获取的状态，动态显示隐藏两个拖拽节点

<code src='../../src/dndKit/useDroppable/basic-setup.tsx'></code>

### Multiple Droppables

`多个容器`

> 代码思路

1. 把上个示例的容器循环遍历一下，并加入 id 作为唯一标识符

<code src='../../src/dndKit/useDroppable/multiple-droppables.tsx'></code>

### Collision Detection Algorithms

`碰撞检测算法`

> 代码思路

1. 修改**DndContext**中的**collisionDetection**

<code src='../../src/dndKit/useDroppable/collision-detection-algorithms.tsx'></code>
