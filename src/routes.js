import React from 'react';
import { isAuthenticated } from './auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';

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
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Não logado</h1>} />
            <PrivateRoute path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
