import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Editor/Header";
import Canvas from "./Editor/Canvas";
import Properties from "./Editor/Panel/PropsPanel/JSONPanel";
import ChartPanel from "./Editor/Panel/PropsPanel/ChartPanel";
import './style.less'
import PropsPanel from "./Editor/Panel/PropsPanel";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-constainer">
        <Header key="header" />
        <Canvas key="canvas" />
        <PropsPanel key="properties" context={''}/>
        <ChartPanel key="selection" />
      </div>
    </Provider>
  );
};
export default App;
