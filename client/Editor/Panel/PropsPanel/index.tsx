import React, { useState } from "react";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./style.less";

interface IProps {
  // context?: React.FC;
  context?: string;
}

const PropsPanel: React.FC<IProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="props-panel">
      <Button
        type="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ marginBottom: 2 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
        {props.children}
    </div>
  );
};

export default PropsPanel;
