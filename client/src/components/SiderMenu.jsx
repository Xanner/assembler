import React from 'react';
import { Layout, Menu } from 'antd';
import {
  CalculatorOutlined,
  BookOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };

  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider style={{ minHeight: '100vh' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <CalculatorOutlined />
                <span>Kursy</span>
              </span>
            }
          >
            <Menu.Item key="1">Dodawanie</Menu.Item>
            <Menu.Item key="2">Odejmowanie</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <BookOutlined />
                <span>Poradnik</span>
              </span>
            }
          >
            <Menu.Item key="3">Rejestry</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}