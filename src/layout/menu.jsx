import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

const Index = () => {
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" ><Link to="/dnd-kit/">前言</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/dnd-kit/library">拖拽库介绍</Link></Menu.Item>
      <SubMenu key="sub1"  title="拖拽">
        <Menu.Item key="3"><Link to="/dnd-kit/one-basic">基础</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/dnd-kit/one-handle">手柄</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/dnd-kit/one-pressDelay">按下延迟（1s）</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/dnd-kit/one-minimumDistance">XY轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/dnd-kit/one-minimumDistanceX">x轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="8"><Link to="/dnd-kit/one-minimumDistanceY">y轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="9"><Link to="/dnd-kit/one-horizontalAxis">水平拖动</Link></Menu.Item>
        <Menu.Item key="10"><Link to="/dnd-kit/one-verticalAxis">垂直拖动</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2"  title="拖拽叠加">
        <Menu.Item key="11"><Link to="/dnd-kit/two-basic">基础</Link></Menu.Item>
        <Menu.Item key="12"><Link to="/dnd-kit/two-disableDropAnimation">取消动画</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub3"  title="拖拽放置">
        <Menu.Item key="13"><Link to="/dnd-kit/three-basic">单节点放置</Link></Menu.Item>
        <Menu.Item key="14"><Link to="/dnd-kit/three-multiple-droppables">多节点放置</Link></Menu.Item>
        <Menu.Item key="15"><Link to="/dnd-kit/collision-detection">碰撞检测算法选择</Link></Menu.Item>
      </SubMenu>
    </Menu>
    )
}

export default Index;
