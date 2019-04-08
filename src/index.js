import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoverImage from "./CoverImage";
import CityBlock from "./CityBlock";
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"
import "./main.scss"

/*
    <Container fluid style={{padding: 0}}>
       Logo
      <Row>
        <Col>
          <img
            //consider using a CDN service, rather than provisioning via local env
            src={process.env.PUBLIC_URL + '/tourbo_log.png'}
            className="logo"
            alt="logo"
          />
        </Col>
      </Row>
       Header
      <Row>
        <Col style={{ height: "400px"}}>
          <CoverImage
            img={Faker.image.city()}
            mainText="Come Travel With Us!"
            subText="Join now!"
          />
        </Col>
      </Row>
       Body
      <Row>
        <Col style={{paddingTop:"50px"}}>
          <CityBlock img={Faker.image.food()}/>
        </Col>
      </Row>
       Footer
      <Row>
        <Col />
      </Row>
    </Container>
    */


ReactDOM.render(<App />, document.getElementById("root"));
