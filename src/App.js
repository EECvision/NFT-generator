import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Create from './pages/create/create';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Home from './pages/home/home';
import Logo from './components/logo/logo';
import Mint from './pages/mint/mint';
import Explore from './pages/explore/explore';
import Canvas from './pages/canvas/canvas';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Sidebar />
        <Logo />

        <Switch>
          <Redirect exact from="/" to="/canvas" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/canvas" component={Canvas} />
        </Switch>
      </div>
    </div>
  )
}

export default App;