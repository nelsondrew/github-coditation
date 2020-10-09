import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";
import GithubState from "./context/github/githubState";
import AlertState from "./context/Alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />

            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
