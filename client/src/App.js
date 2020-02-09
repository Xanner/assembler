import React from "react";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import SiderMenu from "./components/SiderMenu";
import { Layout } from "antd";
import AdditionPage from "./pages/AdditionPage";
import SubtractionPage from "./pages/SubtractionPage";
import RegisterPage from "./pages/RegisterPage";

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
              <Route exact path="/guide/register" component={RegisterPage} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
