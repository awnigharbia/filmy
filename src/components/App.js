import React, { Component } from "react";
import Navbar from "./nav/";
import { Route, Switch } from "react-router-dom";
import Home from "./home";

const Latest = () => <div>Latest</div>
const Latest2 = () => <div>Latest</div>
const Latest3 = () => <div>Latest</div>

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/latest-movies" component={Latest} />
          <Route path="/categories" component={Latest2} />
          <Route path="/about" component={Latest3} />
        </Switch>
      </>
    );
  }
}
