import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { ChartInfo, getChartList } from "../../../../api/editor";

interface IProps {
  collapsed?: boolean;
  loading?: boolean;
}
const ChartList:React.FC<IProps> = (props) => {
  const { SubMenu } = Menu;
  const [chartList, setChartList] = useState<ChartInfo[]>([]);
  console.log('ChartList');
  useEffect(() => {
    getChartList().then((data) => {
      setChartList(data);
    });
  }, []);
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["1"]}
      inlineCollapsed={props.collapsed}
    >
      {chartList.map((chart: ChartInfo) => {
        return (
          <SubMenu key={chart.id} title={chart.type}>
            {chart.properties}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default ChartList;
