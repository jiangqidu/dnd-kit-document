import { Layout } from "antd";
import { Route } from "react-router-dom";
import Left from "./layout/menu.jsx";
import Preface from "./layout/doc/preface";
import Library from "./layout/doc/library";
import OneBasic from "./layout/core/one/basicSetup";
import OneHandle from "./layout/core/one/dragHandle";
import OnePressDelay from "./layout/core/one/pressDelay";
import OneMinimumDistance from "./layout/core/one/minimumDistance";
import OneMinimumDistanceX from "./layout/core/one/minimumDistanceX";
import OneMinimumDistanceY from "./layout/core/one/minimumDistanceY";
import OneHorizontalAxis from "./layout/core/one/horizontalAxis";
import OneVerticalAxis from "./layout/core/one/verticalAxis";
import TwoBasic from "./layout/core/two/basicSetup";
import TwoDisableDropAnimation from "./layout/core/two/disableDropAnimation";
import ThreeBasic from "./layout/core/three/basicSetup";
import ThreeMultiple from "./layout/core/three/multipleDroppables";
import CollisionDetection from "./layout/core/three/collisionDetection";
import FourBasic from "./layout/core/four/basicSetup";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1>dnd kit示例整理</h1>
        <a
          href="https://github.com/jiangqidu/dnd-kit-document"
          target="_blank"
          rel="noreferrer"
          style={{ display: "contents" }}
        >
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            className="github"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </Header>
      <Layout>
        <Sider theme="light" width={220}>
          <Left />
        </Sider>
        <Content style={{ padding: 24 }}>
          <Route path="/dnd-kit/" exact component={Preface} />
          <Route path="/dnd-kit/library" component={Library} />

          <Route path="/dnd-kit/one-basic" component={OneBasic} />
          <Route path="/dnd-kit/one-handle" component={OneHandle} />
          <Route path="/dnd-kit/one-pressDelay" component={OnePressDelay} />
          <Route
            path="/dnd-kit/one-minimumDistance"
            component={OneMinimumDistance}
          />
          <Route
            path="/dnd-kit/one-minimumDistanceX"
            component={OneMinimumDistanceX}
          />
          <Route
            path="/dnd-kit/one-minimumDistanceY"
            component={OneMinimumDistanceY}
          />
          <Route
            path="/dnd-kit/one-horizontalAxis"
            component={OneHorizontalAxis}
          />
          <Route path="/dnd-kit/one-verticalAxis" component={OneVerticalAxis} />

          <Route path="/dnd-kit/two-basic" component={TwoBasic} />
          <Route
            path="/dnd-kit/two-disableDropAnimation"
            component={TwoDisableDropAnimation}
          />

          <Route path="/dnd-kit/three-basic" component={ThreeBasic} />
          <Route
            path="/dnd-kit/three-multiple-droppables"
            component={ThreeMultiple}
          />
          <Route
            path="/dnd-kit/collision-detection"
            component={CollisionDetection}
          />

          <Route path="/dnd-kit/four-basic" component={FourBasic} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
