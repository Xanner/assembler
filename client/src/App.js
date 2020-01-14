import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SiderMenu from './components/SiderMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <SiderMenu />
        <Switch>
          <Route path="/">
            strona glowna
          </Route>
          <Route path="/courses">
            kursy
          </Route>
          <Route path="/guide">
            poradnik
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
