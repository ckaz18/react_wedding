import React from 'react'; // { Component } 
// import logo from './logo.svg';
import {BrowserRouter, Redirect, Router, Switch, Route} from "react-router-dom"; 
import './App.css';
import Info from "./components/Info/Info";
import Registry from "./components/Registry/Registry";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Info}/>
          <Route path="/registry" component={Registry}/>
          <Router path="/about" component={About}/>
          <Redirect from="*" to="/"/>
        </Switch>
        </BrowserRouter>
      {/* <Sidebar></Sidebar>
      <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
