import { SIGNED_IN, SIGNED_OUT } from '../constants';

let user = {
    isAuthenticated: false,
    email: null
}

export default(state = user, action) => {
    switch(action.type){
        case SIGNED_IN:
            const { email } = action;
            user = {
                isAuthenticated: true,
                email
            }
            return user;
        case SIGNED_OUT:
            return {
                isAuthenticated: false,
                email: null
            }
        default:
            return state;
    }
}