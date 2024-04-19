"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Switch } from 'antd';
import Backi from "@/app/Background/Backi";
import Calendar from "@/app/pages/Calendar";
import Counti from "@/app/CountDown/Counti";

const { Header, Sider, Content } = Layout;

const Layouti = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />} >nav 1</Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>Calendar</Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>nav 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: isDarkMode ? '#333333' : '#ffffff',
          }}
        >
          <div className="row">
            <div className="col">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div className="col-9" />
            <div className="col p-3">
              <Switch
                checked={isDarkMode}
                onChange={toggleMode}
                style={{
                  fontSize: '20px',
                }}
              />
            </div>
          </div>
        </Header>
          <Content
              style={{
                  // margin: '24px 16px',
                  // padding: 24,
                  minHeight: 280,
                  background: isDarkMode ? '#333333' : '#ffffff',
                  // borderRadius: '10px', // adjust as needed
                  color: isDarkMode ? '#ffffff' : '#000000',
              }}
                >
              <div className="row">
                  <div className="col-11">
                       <Backi/>
                  </div>
                  <div className="col-1">
                      <Counti/>
                  </div>
              </div>


          </Content>
      </Layout>
    </Layout>
  );
};

export default Layouti;
