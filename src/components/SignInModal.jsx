import React, { Component } from 'react';
import { hideSignInModal } from '../actions'
import { connect } from 'react-redux';
import SignIn from './SignIn';
import ReactModal from 'react-modal';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SignInModal.css"

const SocialMediaLogin = props =>{
    return(
        <Row>
            <Col className="social_media_buttons">
                <h4 className="text-center mb-3">{props.title}</h4>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="1x" color="#3B5998"/>
                    &nbsp;Facebook
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" color="#00ACED" />
                    &nbsp;Twitter
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" color="#6c757d"/>
                    &nbsp;Instagram
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'google']} size="1x" color="#dd4b39"/>
                    &nbsp;Google
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" color="#007bb5"/>
                    &nbsp;LinkedIn
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="#24292e"/>
                    &nbsp;Github
                </Button>
                <Button size="sm" outline color="secondary">
                    <FontAwesomeIcon icon={['fab', 'reddit']} size="1x" color="#ff5700"/>
                    &nbsp;Reddit
                </Button>
            </Col>
        </Row>
    );
}

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }
  
    onClose() {
        this.props.hideSignInModal();
    }
  
    render() {
        return (
            <ReactModal 
                isOpen={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={this.onClose}
                onClose={this.onClose}
                className="Modal_Content"
                overlayClassName="Modal_Overlay">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center">Sign In</h1>
                            <Button 
                                color="link"
                                className="Modal_Close float-right"
                                onClick={this.onClose}>
                                <FontAwesomeIcon icon="times" color="#6c757d" size="1x" className="mr-auto"/>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="social_media_login">
                            <SocialMediaLogin title="Or Using..." />
                        </Col>
                        <Col sm="8">
                            <SignIn />
                        </Col>
                    </Row>
                </Container>
            </ReactModal>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { hideSignInModal })(SignInModal);