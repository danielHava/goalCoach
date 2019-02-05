import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import TaskManager from '../TaskManager';
import SignIn from '../SignIn';
import Header from '../Header';
import Footer from '../Footer';
import ModalRoot from '../modals/ModalRoot';
import NotFound from '../NotFound';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import history from '../../history';

const AppContainer = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <ModalRoot />
            <Footer />
        </div>
    );
}

const AppRouter = () => {   
    return (
        <Router history={history}>
            <AppContainer>
                <Switch>
                    <PublicRoute exact path="/" component={Home} />
                    <PrivateRoute path="/dashboard" component={SignIn} />
                    <PrivateRoute path="/tasks" component={TaskManager} />
                    <PrivateRoute path="/market" component={SignIn} />
                    <PrivateRoute path="/buy" component={SignIn} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </AppContainer>
        </Router>
    );
}

export default AppRouter;