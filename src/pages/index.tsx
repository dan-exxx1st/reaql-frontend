import React from 'react';
import { Redirect } from 'react-router-dom';

import { checkAuth } from 'helpers/authHelper';

const IndexPage = () => {
    const auth = checkAuth();

    if (auth) {
        return <Redirect to="/home" />;
    } else {
        return <Redirect to="/signin" />;
    }
};

export default IndexPage;

export { default as HomePage } from './Home';
export { default as SignInPage } from './SignIn';
export { default as SignUpPage } from './SignUp';
