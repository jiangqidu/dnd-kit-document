import { Layout } from 'antd';
import Left from './layout/left';
import {Route} from 'react-router-dom';
import "./App.css";

import Preface from './layout/demo/preface';
import Library from './layout/demo/library';

import OneBasic from './layout/demo/one/basic';
import OneHandle from './layout/demo/one/handle';
import OnePressDelay from './layout/demo/one/pressDelay';
import OneMinimumDistance from './layout/demo/one/minimumDistance';
import OneMinimumDistanceX from './layout/demo/one/minimumDistanceX';
import OneMinimumDistanceY from './layout/demo/one/minimumDistanceY';
import OneHorizontalAxis from './layout/demo/one/horizontalAxis';
import OneVerticalAxis from './layout/demo/one/verticalAxis';
import OneRestrictToWindowEdges from './layout/demo/one/restrictToWindowEdges';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1>dnd kit小册</h1>
      </Header>
      <Layout>
        <Sider theme="light" width={220}><Left /></Sider>
        <Content style={{padding:24}}>
          <Route path="/" exact component={Preface} />
          <Route path="/library" component={Library} />

          <Route path="/one-basic" component={OneBasic} />
          <Route path="/one-handle" component={OneHandle} />
          <Route path="/one-pressDelay" component={OnePressDelay} />
          <Route path="/one-minimumDistance" component={OneMinimumDistance} />
          <Route path="/one-minimumDistanceX" component={OneMinimumDistanceX} />
          <Route path="/one-minimumDistanceY" component={OneMinimumDistanceY} />
          <Route path="/one-horizontalAxis" component={OneHorizontalAxis} />
          <Route path="/one-verticalAxis" component={OneVerticalAxis} />
          <Route path="/one-restrictToWindowEdges" component={OneRestrictToWindowEdges} />

        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
