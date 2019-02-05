import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => {
    return(
        <Route {...otherProps} component={(props) => {
            if (isAuthenticated) {
                return (
                    <Component {...props} />
                );
            } else {
                return (
                    <Redirect to='/' />
                );
            }
        }} />
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);