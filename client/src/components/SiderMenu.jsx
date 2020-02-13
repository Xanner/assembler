import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  CalculatorOutlined,
  BookOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  RetweetOutlined,
  FontSizeOutlined,
  TableOutlined,
  AlignCenterOutlined,
  StockOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      currentKey: ["1"]
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleChangeKey = key => this.setState({ currentKey: [key] });

  componentDidMount() {
    this.updateMenuPath(this.props.location.pathname);
  }

  updateMenuPath = path => {
    if (path === "/courses/addition")
      this.setState({
        currentKey: ["addition"]
      });
    if (path === "/courses/subtraction")
      this.setState({
        currentKey: ["subtraction"]
      });
    if (path === "/courses/multiplication")
      this.setState({
        currentKey: ["multiplication"]
      });
    if (path === "/courses/division")
      this.setState({
        currentKey: ["division"]
      });
    if (path === "/courses/ifcondition")
      this.setState({
        currentKey: ["ifcondition"]
      });
    if (path === "/courses/loop")
      this.setState({
        currentKey: ["loop"]
      });
    if (path === "/courses/array")
      this.setState({
        currentKey: ["array"]
      });
    if (path === "/courses/strings")
      this.setState({
        currentKey: ["strings"]
      });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["addition"]}
          selectedKeys={this.state.currentKey}
          onClick={e => this.handleChangeKey(e.key)}
          mode="inline"
        >
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
              <Menu.Item key="addition">
                <span>Dodawanie</span>
                <Link to="/courses/addition" />
              </Menu.Item>
              <Menu.Item key="subtraction">
                <span>Odejmownie</span>
                <Link to="/courses/subtraction" />
              </Menu.Item>
              <Menu.Item key="multiplication">
                <span>Mnożenie</span>
                <Link to="/courses/multiplication" />
              </Menu.Item>
              <Menu.Item key="division">
                <span>Dzielenie</span>
                <Link to="/courses/division" />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="conditions"
              title={
                <span>
                  <QuestionCircleOutlined />
                  <span>Warunki</span>
                </span>
              }
            >
              <Menu.Item key="ifcondition">
                <span>Warunek if</span>
                <Link to="/courses/ifcondition" />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="loops"
              title={
                <span>
                  <RetweetOutlined />
                  <span>Pętle</span>
                </span>
              }
            >
              <Menu.Item key="loop">
                <span>Pętla</span>
                <Link to="/courses/loop" />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="strings"
              title={
                <span>
                  <FontSizeOutlined />
                  <span>Ciągi znaków</span>
                </span>
              }
            >
              <Menu.Item key="strings">
                <span>Ciągi znaków</span>
                <Link to="/courses/strings" />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="arrays"
              title={
                <span>
                  <TableOutlined />
                  <span>Tablice</span>
                </span>
              }
            >
              <Menu.Item key="array">
                <span>Tablica</span>
                <Link to="/courses/array" />
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="guide"
            title={
              <span>
                <BookOutlined />
                <span>Wiedza</span>
              </span>
            }
          >
            <Menu.Item key="register">
              <span>Rejestr</span>
              <Link to="/guide/register" />
            </Menu.Item>
            <Menu.Item key="interruption">
              <span>Przerwania</span>
              <Link to="/guide/interruption" />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SiderMenu);
