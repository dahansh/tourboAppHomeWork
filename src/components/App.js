import React, { Component } from 'react';
import Header from "../include/Header";
import CityPresenter from "./CityPresenter";

class App extends Component {
  render() {
    return (
      <div className={"app--wrapper container-fluid"}>
        <Header/>
        <CityPresenter city={'paris'}/>
      </div>
    );
  }
}

export default App;