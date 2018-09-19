import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <Container
        className="mt-3"
      >
        <Row
          className="mt-5 mb-5"
        >
          <Col>
            <h2>
              My Acount
            </h2>
          </Col>
          <Col>
            <Button
              color="danger"
              onClick={() => this.signOut()}
            >
              Sign Out
            </Button>
          </Col>
        </Row>
        <AddGoal />
        <GoalList />
        <CompleteGoalList />
      </Container>
    );
  }
}

function mapStateToProps(state){
  // console.log('state', state);
  return {};
}

export default connect(mapStateToProps, null)(App);