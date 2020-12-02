import React from 'react';
import { Redirect } from 'react-router-dom';

import useAuth from 'helpers/useAuth';

import { SignInForm } from 'components/common';

const SignInPage = () => {
    const auth = useAuth();
    if (!auth) {
        const _handleSignIn = (payload: {
            email: string;
            password: string;
            rememberMe: boolean;
        }) => {
            const { email, password, rememberMe } = payload;
            console.log(email, password, rememberMe);
        };
        return <SignInForm _handleSignIn={_handleSignIn} />;
    } else {
        return <Redirect to="/home" />;
    }
};

export default SignInPage;
