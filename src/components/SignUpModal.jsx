import React, { Component } from 'react';
import { hideSignUpModal } from '../actions'
import { connect } from 'react-redux';
import SignUp from './SignUp';
import ReactModal from 'react-modal';
import {
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }
  
    onClose() {
        this.props.hideSignUpModal();
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
                <Button 
                    className="Modal_Login float-right"
                    onClick={this.onClose}>
                    <FontAwesomeIcon icon="times" color="#fff" size="1x" className="mr-auto Modal_Close"/>
                </Button>
                <SignUp />
            </ReactModal>
        );
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { hideSignUpModal })(SignUpModal);