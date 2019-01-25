import React from 'react';
import { connect } from 'react-redux';

import SignInModal from './SignInModal.jsx'
// import ConfirmLogoutModal from './ConfirmLogoutModal'
import './Modal.css';


const MODAL_COMPONENTS = {
  'SIGN_IN': SignInModal,
  // 'CONFIRM_LOGOUT': ConfirmLogoutModal,
  /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(state => state.modal)(ModalRoot)