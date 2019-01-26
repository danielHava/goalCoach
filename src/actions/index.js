import { SIGNED_IN, SIGNED_OUT, SET_GOALS, SET_COMPLETE_GOALS, SHOW_MODAL, HIDE_MODAL } from '../constants';

export function userLogIn(email){
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function userLogOut(){
    const action = {
        type: SIGNED_OUT,
    }
    return action;
}

export function setGoals(goals){
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleteGoals(completeGoals){
    const action = {
        type: SET_COMPLETE_GOALS,
        completeGoals
    }
    return action;
}

export function showSignInModal(){
    const action = {
        type: SHOW_MODAL,
        modalType: 'SIGN_IN',
        modalProps: {}
    }
    return action;
}

export function hideSignInModal(){
    const action = {
        type: HIDE_MODAL,
        modalType: 'SIGN_IN',
        modalProps: {}
    }
    return action;
}

export function showSignUpModal(){
    const action = {
        type: SHOW_MODAL,
        modalType: 'SIGN_UP',
        modalProps: {}
    }
    return action;
}

export function hideSignUpModal(){
    const action = {
        type: HIDE_MODAL,
        modalType: 'SIGN_UP',
        modalProps: {}
    }
    return action;
}