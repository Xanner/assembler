import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css';
import SiderMenu from './components/SiderMenu';
import { Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SiderMenu />
          <Switch>
            <Route path="/">
              strona glowna
          </Route>
            <Route path="#/courses/addition">
              dodawanie
          </Route>
            <Route path="#/courses/subtraction">
              odejmowanie
          </Route>
            <Route path="#/guide">
              poradnik
          </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
