import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './history'
import reducer from './reducers';
import { logUser } from './actions';

import Home from './components/Home';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/app');
    }else{
        history.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history}>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/app" component={App} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
 );

registerServiceWorker();