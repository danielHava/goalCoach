import React, { Component } from 'react';

import Home from './components/Home';
import TaskManager from './components/TaskManager';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalRoot from './components/ModalRoot';

import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';

import { logUser } from './actions';
import history from './history'
import store from './store';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        const { email } = user;
        store.dispatch(logUser(email));
        // history.push('/app');
    }else{
        // history.replace('/signin');
    }
});
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            modalOpen: false
        }
    }
    
    render() {
        return (
            <Provider store={store}>
                <Router path="/" history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/tasks" component={TaskManager} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                        </Switch>
                        <ModalRoot />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
