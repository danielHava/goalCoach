import React from 'react';
import { Provider } from 'react-redux';
import { firebaseApp } from './firebase';
import { userLogIn } from './actions';
import store from './store';
import AppRouter from './components/routers/AppRouter';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        store.dispatch(userLogIn(user));
    }else{
        console.log('sign out');
    }
});
const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
