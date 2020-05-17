import React, { useEffect, useState} from 'react';
import {Menu, Button} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {getChartList} from './service';

const Selection = () => {

    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        getChartList();
    })
    return (
        <>
            <Button type='primary' onClick={() => {
                setCollapsed(!collapsed);
            }}
                    style={{marginBottom: 16}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}>
            </Menu>
        </>
    )
};

export default Selection;
