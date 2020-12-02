import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const IndexPage = lazy(() => import('pages/index'));
const HomePage = lazy(() => import('pages/Home'));
const SignInPage = lazy(() => import('pages/SignIn'));
const SignUpPage = lazy(() => import('pages/SignUp'));

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexPage />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/signin">
                    <SignInPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
