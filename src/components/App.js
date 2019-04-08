import React, { Component } from 'react';
import Header from "../include/Header";
import CityPresenter from "./CityPresenter";
import CityBlocks from "./CityBlocks";

class App extends Component {
  render() {
    return (
      <div className={"app--wrapper container-fluid"}>
        <Header/>
        <CityPresenter city={'paris'}/>
        <CityBlocks></CityBlocks>
      </div>
    );
  }
}

export default App;