import React from "react";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import SiderMenu from "./components/SiderMenu";
import { Layout } from "antd";
import AdditionPage from "./pages/arithmetic/AdditionPage";
import SubtractionPage from "./pages/arithmetic/SubtractionPage";
import MultiplicationPage from "./pages/arithmetic/MultiplicationPage";
import DivisionPage from "./pages/arithmetic/DivisionPage";
import RegisterPage from "./pages/RegisterPage";
import IfConditionPage from "./pages/conditions/IfConditionPage";
import LoopPage from "./pages/loops/LoopPage";
import ArrayPage from "./pages/arrays/ArrayPage";
import StringPage from "./pages/strings/StringPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <SiderMenu />
          <Layout.Content>
            <Switch>
              <Route exact path="/courses/addition" component={AdditionPage} />
              <Route
                exact
                path="/courses/subtraction"
                component={SubtractionPage}
              />
              <Route
                exact
                path="/courses/multiplication"
                component={MultiplicationPage}
              />
              <Route exact path="/courses/division" component={DivisionPage} />
              <Route
                exact
                path="/courses/ifcondition"
                component={IfConditionPage}
              />
              <Route exact path="/courses/loop" component={LoopPage} />
              <Route exact path="/courses/array" component={ArrayPage} />
              <Route exact path="/courses/strings" component={StringPage} />
              <Route exact path="/guide/register" component={RegisterPage} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
