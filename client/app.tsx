import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Editor/Header";
import Canvas from "./Editor/Canvas";
import "./style.less";
import PropsPanel from "./Editor/Panel/PropsPanel";

const ChartList = React.lazy(() =>
  import(/* webpackChunkName: "ChartList" */ "./Editor/Panel/PropsPanel/ChartList")
);

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="app-container">
        <Header key="header" />
        <Canvas key="canvas" />
        <PropsPanel key="properties" context={""}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ChartList />
          </React.Suspense>
        </PropsPanel>
      </div>
    </Provider>
  );
};
export default App;
