---
nav: 示例讲解
group: 目录
toc: content
mobile: false
---

# use-draggable

<a href="https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/core-draggable-hooks-usedraggable--basic-setup" target="_blank">官网传送门</a>

官网中很多的示例重复了，基本都是改下参数，或者一些不常用的效果，因此省略了部分

### Basic Setup

`节点能随意拖拽`

> 代码思路

1. 通过改变拖拽元素的**transform**来实现拖拽效果
2. 创建一个 **DraggableItem** 组件，用来当作拖拽子元素
3. 定义 **x**，**y** 坐标值
4. 在 **DndContext** 中监听**onDragMove**事件，并获取 **x**，**y** 的坐标值
5. 将获取的 **x**，**y** 坐标值赋值给 **DraggableItem**，改变其 **style**
6. **onDragEnd**、**onDragCancel**触发时，重新设置 **DraggableItem** 的 **transform**

<code src='../../src/dndKit/useDraggable/basic-setup.tsx'></code>

### Drag Handle

`节点不能拖拽，要拖拽节点中的某个子节点才能拖拽`

> 代码思路

1. 将 **listeners** 放到需要触发拖拽效果的 icon 上

<code src='../../src/dndKit/useDraggable/drag-handle.tsx'></code>

### Press delay

`需要按住拖拽节点一段时间，才能拖拽`

> 代码思路

1. 从 **@dnd-kit/core** 中引入[传感器](https://docs.dndkit.com/api-documentation/sensors)
2. 设置**activationConstraint**的**delay**和**tolerance**
3. 把 1 和 2 传入 **useSensor()** 中作为参数，然后作为 **DndContext** 中的 **sensors** 的值

<code src='../../src/dndKit/useDraggable/press-delay.tsx'></code>

### Minimum Distance

`需要X或者Y轴上移动一些距离，节点才能拖拽`

> 代码思路

1. 设置**activationConstraint**的中的**distance**

<code src='../../src/dndKit/useDraggable/minimum-distance.tsx'></code>

### Minimum Distance – X Axis

`需要在X轴上移动设置的距离，节点才能拖拽`

> 代码思路

1. 只设置**distance**中的**x**值

<code src='../../src/dndKit/useDraggable/minimum-distance-X-axis.tsx'></code>

### Minimum Distance – Y Axis

`需要在Y轴上移动设置的距离，节点才能拖拽`

> 代码思路

1. 只设置**distance**中的**y**值

<code src='../../src/dndKit/useDraggable/minimum-distance-Y-axis.tsx'></code>

### Minimum Distance – X&Y Axis

`需要XY轴同时移动设置的距离，节点才能拖拽`

> 代码思路

1. 同时设置**distance**中的**x**和**y**值

<code src='../../src/dndKit/useDraggable/minimum-distance-X_Y-axis.tsx'></code>

### Horizontal Axis

`规定节点只能沿着x轴移动`

> 代码思路

1. 从 **@dnd-kit/modifiers** 引入**restrictToHorizontalAxis**
2. 设置 **DndContext** 中的 **modifiers**

<code src='../../src/dndKit/useDraggable/horizontal-axis.tsx'></code>

### Vertical Axis

`规定节点只能沿着y轴移动`

> 代码思路

1. 从 **@dnd-kit/modifiers** 引入**restrictToVerticalAxis**
2. 设置 **DndContext** 中的 **modifiers**

<code src='../../src/dndKit/useDraggable/vertical-axis.tsx'></code>

### Restrict To Window Edges

`限制节点拖拽不超过窗口`

> 代码思路

1. 从 **@dnd-kit/modifiers** 引入**restrictToWindowEdges**
2. 设置 **DndContext** 中的 **modifiers**

<code src='../../src/dndKit/useDraggable/restrict-to-window-edges.tsx'></code>
