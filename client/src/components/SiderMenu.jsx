import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  CalculatorOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

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
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <CalculatorOutlined />
                Kursy
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/courses/addition">Dodawanie</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/courses/subtraction">Odejmownie</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <BookOutlined />
                <Link to="/guide">Poradnik</Link>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/guide/register">Rejestr</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}