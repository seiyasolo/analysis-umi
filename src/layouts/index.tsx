import React from 'react';
import styles from './index.less';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import { LeftNav } from '../const/letfNav';
const { Header, Sider, Content } = Layout;
import { formatMessage } from 'umi-plugin-locale';
import LoginLayout from './login/login';

const BasicLayout: React.FC = props => {
  if (!localStorage.getItem('TOKEN')) {
    return (
      <LoginLayout {...props} />
    )
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Header className={styles.header} />
      <Layout>
        <Sider collapsible={false} collapsed={true} >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {LeftNav.map(item => createMenuItem(item))}
          </Menu>
        </Sider>
        <Content className={styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

function createMenuItem(item: any): React.ReactElement {
  return (
    <Menu.Item key={item.key}>
      <Icon type="user" />
      <span>{formatMessage({ id: item.name })}</span>
      <Link to={item.link} />
    </Menu.Item>
  )
}

export default BasicLayout;
