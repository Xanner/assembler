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
            ></SubMenu>
            <SubMenu
              key="loops"
              title={
                <span>
                  <RetweetOutlined />
                  <span>Pętle</span>
                </span>
              }
            ></SubMenu>
            <SubMenu
              key="strings"
              title={
                <span>
                  <FontSizeOutlined />
                  <span>Ciągi znaków</span>
                </span>
              }
            ></SubMenu>
            <SubMenu
              key="arrays"
              title={
                <span>
                  <TableOutlined />
                  <span>Tablice</span>
                </span>
              }
            ></SubMenu>
            <SubMenu
              key="procedures"
              title={
                <span>
                  <StockOutlined />
                  <span>Procedury</span>
                </span>
              }
            ></SubMenu>
            <SubMenu
              key="stack"
              title={
                <span>
                  <AlignCenterOutlined />
                  <span>Stack</span>
                </span>
              }
            ></SubMenu>
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

export default withRouter(SiderMenu);
