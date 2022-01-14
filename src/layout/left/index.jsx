import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

const Index = () => {
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" ><Link to="/">前言</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/library">拖拽库介绍</Link></Menu.Item>
      <SubMenu key="sub1"  title="单节点拖拽">
        <Menu.Item key="3"><Link to="/one-basic">基础</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/one-handle">手柄</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/one-pressDelay">按下延迟（1s）</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/one-minimumDistance">XY轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/one-minimumDistanceX">x轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="8"><Link to="/one-minimumDistanceY">y轴拖动距离超过15px</Link></Menu.Item>
        <Menu.Item key="9"><Link to="/one-horizontalAxis">水平拖动</Link></Menu.Item>
        <Menu.Item key="10"><Link to="/one-verticalAxis">垂直拖动</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2"  title="单节点拖拽叠加">
        <Menu.Item key="11"><Link to="/two-basic">基础</Link></Menu.Item>
        <Menu.Item key="12"><Link to="/two-disableDropAnimation">取消动画</Link></Menu.Item>
      </SubMenu>
    </Menu>
    )
}

export default Index;
