import React from 'react';
import styles from './index.css';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  // console.log(props);
  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible={true}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
            <Link to="/users" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
