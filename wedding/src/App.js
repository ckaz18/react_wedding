import React from 'react'; // { Component } 
// import logo from './logo.svg';
import {BrowserRouter, Redirect, Switch, Route} from "react-router-dom"; 
import './App.css';
import Info from "./components/Info/Info";
import Registry from "./components/Registry/Registry";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="main-header">
        <h3 className="main">Dani & Billy</h3>
        <div style={{height:"2.5rem", marginTop:"2.5rem", position:"fixed", top:0, width: "100%"}} id="main-inner">
            June 6th, 2020 - {"\n"}
            Sedalia CO
        </div>
      </div>
      <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Info}/>
          <Route path="/registry" component={Registry}/>
          <Route path="/about" component={About}/>
          <Redirect from="*" to="/"/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
