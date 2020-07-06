import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { ChartInfo, getChartList } from "../../../../api/editor";
interface IProps {
  collapsed?: boolean;
  loading?: boolean;
}

const ChartList: React.FC<IProps> = (props) => {
  const { SubMenu } = Menu;
  const [chartList, setChartList] = useState<ChartInfo[]>([]);
  console.log('lalalalala');
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
            {chart.chartMap}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default ChartList;
