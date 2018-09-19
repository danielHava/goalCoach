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

class SignIn extends Component {
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
  signIn(){
    console.log('state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
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
              <h1 className="text-center mb-5">Sign In</h1>
            </Col>
          </Row>
          <FormGroup row>
            <Label for="signInEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input 
                type="email" 
                name="email" 
                id="signInEmail" 
                placeholder="Your email"
                onChange = {event => this.setState({email: event.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input 
                type="password" 
                name="password" 
                id="signInPassword" 
                placeholder="Your password" 
                onChange = {event => this.setState({password: event.target.value})}
              />
            </Col>
          </FormGroup>
          <Button
            color="primary"
            onClick = {() => this.signIn()}
          >
            Sign In
          </Button>
          <Row className="mt-3">
            <Col>
              {this.state.error.message}
              <Link to="/signup">Sign up instead</Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
  
export default SignIn;