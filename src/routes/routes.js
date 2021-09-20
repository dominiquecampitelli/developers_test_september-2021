import React from 'react';
import { isAuthenticated } from '../auth';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Details from '../pages/Details';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                />
            )
        }
    />
);

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/details/:media_type/:id" component={Details} />
    </Switch>
);

export default Routes;
