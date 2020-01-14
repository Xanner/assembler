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
import AdditionPage from './pages/AdditionPage';
import SubtractionPage from './pages/SubtractionPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SiderMenu />
          <Switch>
            <Route exact path='/courses/addition' component={AdditionPage} />
            <Route exact path='/courses/subtraction' component={SubtractionPage} />
            <Route exact path='/guide/register' component={RegisterPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
