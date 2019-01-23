import { SIGNED_IN, SET_GOALS, SET_COMPLETE_GOALS, SHOW_MODAL, HIDE_MODAL } from '../constants';

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
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

export function showSignInMOdal(){
    const action = {
        type: SHOW_MODAL,
        modalType: 'SIGN_IN',
        modalProps: {}
    }
    return action;
}

export function hideSignInMOdal(){
    const action = {
        type: HIDE_MODAL,
        modalType: 'SIGN_IN',
        modalProps: {}
    }
    return action;
}