import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import GetWeather from "./components/getWeather";
import Edit from "./components/update";
import Create from "./components/create";
import Delete from "./components/delete";
import GetById from "./components/getById";

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "container">
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
         <Link to='/'className="navbar-brand">WEATHER REPORT BROUGHT YOU BY GOOGLE</Link>
          <div className>
            <ul className = 'navbar-nav mr-auto'>
              <li className="navbar-item">
                <Link to='/' className="nav-link">Weathers</Link>
              </li>
              <li className="navbar-item">
                <Link to='/create' className="nav-link">CreateCity</Link>
              </li>
              <li className="navbar-item">
                <Link to='/edit/:id' className="nav-link">EditCity</Link>
              </li>
              <li className="navbar-item">
                <Link to='/delete/:id' className="nav-link">DeleteCity</Link>
              </li>
              <li className="navbar-item">
                <Link to='/getBy/:id' className="nav-link">GetCity</Link>
              </li>
            </ul>
          </div>
        </nav>
      <Route path = '/' exact component ={GetWeather}/>
      <Route path = '/edit/:id' component ={Edit}/>
      <Route path = '/create' component ={Create}/>
      <Route path = '/delete/:id' component ={Delete}/>
      <Route path = '/getBy/:id' component ={GetById}/>
      </div>
      </Router>
    );
  }
}
export default App;