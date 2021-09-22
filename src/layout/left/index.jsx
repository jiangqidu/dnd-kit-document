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
        <Menu.Item key="4"><Link to="/one-handle">带手柄</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/one-pressDelay">按下延迟</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/one-minimumDistance">在X轴或Y轴拖到15px</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/one-minimumDistanceX">在x轴拖动15px</Link></Menu.Item>
        <Menu.Item key="8"><Link to="/one-minimumDistanceY">在y轴拖动15px</Link></Menu.Item>
        <Menu.Item key="9"><Link to="/one-horizontalAxis">水平拖动</Link></Menu.Item>
        <Menu.Item key="10"><Link to="/one-verticalAxis">垂直拖动</Link></Menu.Item>
        <Menu.Item key="11"><Link to="/one-restrictToWindowEdges">拖动范围不超过窗口大小</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2"  title="单节点拖拽叠加">
        <Menu.Item key="12">Team 1</Menu.Item>
        <Menu.Item key="13">Team 2</Menu.Item>
      </SubMenu>
    </Menu>
    )
}

export default Index;
