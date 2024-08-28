---
group: 目录
toc: content
order: 3
---

# sortable

<a href="https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-vertical--basic-setup" target="_blank">官网传送门</a>

### vertical

`基础的列表拖拽（竖向）`

> 代码思路

1. 引入 **@dnd-kit/sortable**中的**SortableContext**和**useSortable**
2. 解构 **useSortable** 中的 **attributes**、**listeners**、**setNodeRef**等需要用到的选项
3. 将上述结构出来的值，赋值给列表项
4. 把列表项放入**SortableContext**中

<code src='../../src/dndKit/sortable/vertical.tsx'></code>

### Basic Setup

`可叠加的列表拖拽（竖向）`

> 代码思路

1. 可参考之前介绍的**dragOverlay**用法
2. **useSortable**中可以获取到当前拖拽状态，利用**isDragging**做样式控制

<code src='../../src/dndKit/sortable/basic-setup.tsx'></code>

其余的效果和单节点拖拽大同小异，可以参考之前的介绍......

### Horizontal

`基础的列表拖拽（横向）`

> 代码思路

1. 从 **@dnd-kit/sortable**中引入**horizontalListSortingStrategy**
2. 设置**SortableContext**中的**strategy**为**horizontalListSortingStrategy**

<code src='../../src/dndKit/sortable/horizontal.tsx'></code>

其余的效果和单节点拖拽大同小异，可以参考之前的介绍......

### Grid

`基础的宫格拖拽`

> 代码思路

1. 从 **@dnd-kit/sortable**中引入**rectSortingStrategy**
2. 设置**SortableContext**中的**strategy**为**rectSortingStrategy**

<code src='../../src/dndKit/sortable/grid.tsx'></code>

其余的效果和单节点拖拽大同小异，可以参考之前的介绍......
