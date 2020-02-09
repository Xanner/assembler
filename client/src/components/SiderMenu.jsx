import React from "react";
import { Link } from "react-router-dom";
import {
  CalculatorOutlined,
  BookOutlined,
  ReconciliationOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="courses"
            title={
              <span>
                <ReconciliationOutlined />
                <span>Kursy</span>
              </span>
            }
          >
            <SubMenu
              key="arithmetic"
              title={
                <span>
                  <CalculatorOutlined />
                  <span>Arytmetyka</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <span>Dodawanie</span>
                <Link to="/courses/addition" />
              </Menu.Item>
              <Menu.Item key="2">
                <span>Odejmownie</span>
                <Link to="/courses/subtraction" />
              </Menu.Item>
              <Menu.Item key="3">
                <span>Mnożenie</span>
                <Link to="/courses/multiplication" />
              </Menu.Item>
              <Menu.Item key="4">
                <span>Dzielenie</span>
                <Link to="/courses/division" />
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="guide"
            title={
              <span>
                <BookOutlined />
                <span>Poradnik</span>
              </span>
            }
          >
            <Menu.Item key="30">
              <span>Rejestr</span>
              <Link to="/guide/register" />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
