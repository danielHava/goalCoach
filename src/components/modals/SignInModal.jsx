import React, { Component } from 'react';
import { hideSignInModal } from '../../actions'
import { connect } from 'react-redux';
import SignIn from '../SignIn';
import ReactModal from 'react-modal';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SignInModal.css"

const ModalTitle = props => {
    return(
        <Row>
            <Col>
                <h1 className="text-center">{props.title}</h1>
                <Button 
                    color="link"
                    className="Modal_Close float-right"
                    onClick={props.close}>
                    <FontAwesomeIcon icon="times" color="#6c757d" size="1x" className="mr-auto"/>
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
                    <ModalTitle title="Sign In" close={this.onClose}/>
                    <SignIn />
                </Container>
            </ReactModal>
        );
    }
}

export default connect(null, { hideSignInModal })(SignInModal);