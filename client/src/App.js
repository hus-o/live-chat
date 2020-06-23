import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/home"
import Chat from "./components/chat"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/chat" component={Chat}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
