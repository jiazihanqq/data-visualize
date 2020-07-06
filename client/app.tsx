import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Editor/Header";
import Canvas from "./Editor/Canvas";
import PropsPanel from "./Editor/Panel/PropsPanel";
import "./style.less";

const ChartList = React.lazy(() =>
  import(
    /* webpackChunkName:"ChartList" */ "./Editor/Panel/PropsPanel/ChartList"
  )
);
const JSONPanel = React.lazy(() =>
  import(
    /* webpackChunkName:"JSONPanel" */ "./Editor/Panel/PropsPanel/JSONPanel"
  )
);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header key="header" />
        <Canvas key="canvas" />
        <PropsPanel key="properties" context={""}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ChartList collapsed={false} />
            <JSONPanel />
          </React.Suspense>
        </PropsPanel>
      </div>
    </Provider>
  );
};
export default App;
