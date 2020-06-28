import React, { useEffect, useState } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { ChartListRes, getChartList } from "../../api/editor";

const Selection = () => {
  const [collapsed, setCollapsed] = useState<ChartListRes>({});
  useEffect(() => {
    getChartList({ id: 1 }).then((data) => setCollapsed(data));
  });
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu></Menu>
    </>
  );
};

export default Selection;
