import React, {useState} from "react";
import {Button, Menu} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './style.less'

interface IProps {
  // context?: React.FC;
  context?: string;
}

const PropsPanel: React.FC<IProps> = (props) => {
  const { context } = props;
  const { SubMenu } = Menu;
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
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        inlineCollapsed={collapsed}
      >
        {context}
      </Menu>
    </div>
  );
};

export default PropsPanel;
