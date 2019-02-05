import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => {
    return(
        <Route {...otherProps} component={(props) => {
            if (isAuthenticated) {
                return (
                    <Redirect to='/tasks' />
                );
            } else {
                return (
                    <Component {...props} />
                );
            }
        }} />
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);