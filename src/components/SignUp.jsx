import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signUp(){
    console.log('state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
      this.setState({ error });
    });
  }
  render() {
    return (
      <Container>
        <Form className="m-3 pt-3">
          <Row>
            <Col>
              <h1 className="text-center mb-5">Sign Up</h1>
            </Col>
          </Row>
          <FormGroup row>
            <Label for="signUpEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input 
                type="email" 
                name="email" 
                id="signUpEmail" 
                placeholder="Your Email"
                onChange = {event => this.setState({email: event.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="signUpPassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input 
                type="password" 
                name="password" 
                id="signUpPassword" 
                placeholder="Choose password" 
                onChange = {event => this.setState({password: event.target.value})}
              />
            </Col>
          </FormGroup>
          <Row className="mt-3">
            <Col>
              <Button
                color="primary"
                onClick = {() => this.signUp()}
              >
                Sign Up
              </Button>
            </Col>
            <Col>
              {this.state.error.message}
              <Link to="/signin">Already a user? Sign in instead</Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
  
export default SignUp;