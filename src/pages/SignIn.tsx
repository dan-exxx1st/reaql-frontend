import React from 'react';

import { SignInForm } from 'components/common';

const SignInPage = () => {
    const _handleSignIn = (payload: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => {
        const { email, password, rememberMe } = payload;
        console.log(email, password, rememberMe);
    };
    return <SignInForm _handleSignIn={_handleSignIn} />;
};

export default SignInPage;
