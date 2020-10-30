import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './dashboard_module/Footer';
import Header from './dashboard_module/Header';
import Login from './dashboard_module/Login';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Footer/>
        <Switch>
          <Route to='/login'exact component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
