import React, { useEffect, useState } from "react";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ChartInfo, getChartList } from "../../../../api/editor";

const ChartPanel = () => {
  const { SubMenu } = Menu;
  const [chartList, setChartList] = useState<ChartInfo[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    getChartList().then((data) => {
      setChartList(data);
    });
  }, []);
  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ marginBottom: 2 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        inlineCollapsed={collapsed}
      >
        {chartList.map((chart: ChartInfo) => {
          return (
            <SubMenu key={chart.id} title={chart.type}>
              {chart.properties}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default ChartPanel;
