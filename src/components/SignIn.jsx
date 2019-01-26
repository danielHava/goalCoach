import React, { Component } from 'react';
import {
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import { firebaseApp } from '../firebase';
import { hideSignInModal } from '../actions'
import { connect } from 'react-redux';

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
		this.props.hideSignInModal();
	}

	render() {
		return (
			<Form className="m-3 pt-3">
				<Row>
					<Col>
						<h3 className="text-center mb-5">Using Email</h3>
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
				<Row className="mt-3">
					<Col>
						{this.state.error.message}
					</Col>
				</Row>
				<Row className="mt-3">
					<Col>
						<Button
							className="mr-1"
							color="primary"
							outline
							onClick = {() => this.signIn()}
						>
							Sign In
						</Button>
						<Button
							className="signup_link"
							color="link"
						>
							or Sign up instead
						</Button>
					</Col>
				</Row>
			</Form>
		);
	}
}
  
export default connect(null, { hideSignInModal })(SignIn);