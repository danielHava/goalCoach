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
import { firebaseApp,
	googleAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	githubAuthProvider,
} from '../firebase';
import { hideSignInModal } from '../actions'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaLogin = props => {
    return(
        <Row>
            <Col className="social_media_buttons">
                <h4 className="text-center mb-3">{props.title}</h4>
				<Button 
					size="sm" 
					outline 
					color="secondary"
					onClick={props.signInFacebook}>
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="1x" color="#3B5998"/>
                    &nbsp;Facebook
                </Button>				
				<Button 
					size="sm" 
					outline 
					color="secondary"
					onClick={props.signInTwitter}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" color="#00ACED" />
                    &nbsp;Twitter
                </Button>
				<Button 
					size="sm"
					outline
					color="secondary"
					onClick={props.signInGoogle}>
                    <FontAwesomeIcon icon={['fab', 'google']} size="1x" color="#dd4b39"/>
                    &nbsp;Google
                </Button>
				<Button 
					size="sm"
					outline 
					color="secondary"
					onClick={props.signInGitHub}>
                    <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="#24292e"/>
                    &nbsp;Github
                </Button>
                {/* <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" color="#6c757d"/>
                    &nbsp;Instagram
                </Button> */}
                {/* <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" color="#007bb5"/>
                    &nbsp;LinkedIn
                </Button> */}
                {/* <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'reddit']} size="1x" color="#ff5700"/>
                    &nbsp;Reddit
                </Button> */}
            </Col>
        </Row>
    );
}

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
		this.signInWithEmail = this.signInWithEmail.bind(this);
		this.signInWithGoogle = this.signInWithGoogle.bind(this);
		this.signInWithFacebook = this.signInWithFacebook.bind(this);
		this.signInWithTwitter = this.signInWithTwitter.bind(this);
		this.signInWithGitHub = this.signInWithGitHub.bind(this);
	}

	signInWithEmail(){
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({ error });
			});
		this.props.hideSignInModal();
	}

	signInWithGoogle(){
		firebaseApp.auth().signInWithPopup(googleAuthProvider).then(result => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			console.log('Logged in with Google');
		}).catch(error => {
			console.log('error', error);
			this.setState({ error });
		});
		this.props.hideSignInModal();
	}

	signInWithFacebook(){
		firebaseApp.auth().signInWithPopup(facebookAuthProvider).then(result => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			console.log('Logged in with Facebook');
		}).catch(error => {
			console.log('error', error);
			this.setState({ error });
		});
		this.props.hideSignInModal();
	}

	signInWithTwitter(){
		firebaseApp.auth().signInWithPopup(twitterAuthProvider).then(result => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			console.log('Logged in with Twitter');
		}).catch(error => {
			console.log('error', error);
			this.setState({ error });
		});
		this.props.hideSignInModal();
	}

	signInWithGitHub(){
		firebaseApp.auth().signInWithPopup(githubAuthProvider).then(result => {
			// const token = result.credential.accessToken;
			// const user = result.user;
			console.log('Logged in with GitHub');
		}).catch(error => {
			console.log('error', error);
			this.setState({ error });
		});
		this.props.hideSignInModal();
	}

	render() {
		return (
			<Row>
				<Col sm="4" className="social_media_login">
					<SocialMediaLogin 
						title="Or Using..."
						signInGoogle={this.signInWithGoogle}
						signInFacebook={this.signInWithFacebook}
						signInTwitter={this.signInWithTwitter}
						signInGitHub={this.signInWithGitHub}
					/>
				</Col>
				<Col sm="8">
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
									onClick = {() => this.signInWithEmail()}
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
				</Col>
			</Row>
		);
	}
}
  
export default connect(null, { hideSignInModal })(SignIn);