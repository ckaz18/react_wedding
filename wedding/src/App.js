import React from 'react'; // { Component } 
// import logo from './logo.svg';
import {BrowserRouter, Redirect, Switch, Route} from "react-router-dom"; 
import './App.css';
import Info from "./components/Info/Info";
import Registry from "./components/Registry/Registry";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
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
