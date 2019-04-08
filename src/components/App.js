import React, { Component } from 'react';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import CoverImage from "../CoverImage";
// import Faker from "faker";
// import CityBlock from "../CityBlock";
import Header from "./Header";
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