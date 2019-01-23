import React, { Component } from 'react';
import { hideSignInMOdal } from '../actions'
import { connect } from 'react-redux';
import SignIn from './SignIn';
import ReactModal from 'react-modal';

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }
  
    onClose() {
        this.props.hideSignInMOdal();
    }
  
    render() {
        return (
            <ReactModal onClose={this.onClose}>
                <div className="login">
                    <h1>Login</h1>
                    <SignIn />
                </div>
            </ReactModal>
        );
    }
}
function mapStateToProps(state){
    console.log('state', state);
    return state;
}

export default connect(mapStateToProps, { hideSignInMOdal })(SignInModal);