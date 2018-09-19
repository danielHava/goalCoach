import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <Container
        className="mt-3"
      >
        <Row>
          <Col>
            <h1>
              Home
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;