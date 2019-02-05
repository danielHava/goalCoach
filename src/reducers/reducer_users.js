import { SIGNED_IN, SIGNED_OUT } from '../constants';

let user = {
    isAuthenticated: false,
    email: null,
    displayName : null,
    emailVerified : null,
    photoURL : null,
    uid : null,
    providerData : null,
}

export default(state = user, action) => {
    switch(action.type){
        case SIGNED_IN:
            const {     
                email,
                displayName,
                emailVerified,
                photoURL,
                uid,
                providerData } = action.data;
            return {
                isAuthenticated: true,
                email,
                displayName,
                emailVerified,
                photoURL,
                uid,
                providerData,
            };
        case SIGNED_OUT:
            return user;
        default:
            return state;
    }
}