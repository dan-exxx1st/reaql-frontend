import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { SignInForm } from 'components/common';

import { CheckAuth, setUserAndSession } from 'helpers/authHelper';
import { SAVE_USER, UserContext } from 'helpers/contexts/userContext';

import { SIGN_IN } from 'lib/graphql/mutations/auth';
import { Mutation } from 'lib/graphql/types';

const SignInPage = () => {
    const history = useHistory();
    const [signIn] = useMutation<Mutation>(SIGN_IN);
    const { dispatch } = useContext(UserContext);
    const auth = CheckAuth();
    if (!auth) {
        const _handleSignIn = async (payload: {
            email: string;
            password: string;
            rememberMe: boolean;
        }) => {
            const { email, password, rememberMe } = payload;

            const { data } = await signIn({
                variables: { email, password, rememberMe },
            });
            if (data) {
                const { signIn } = data;
                const { user, session } = signIn;
                if (rememberMe && session) {
                    setUserAndSession({ user, session });
                }

                if (dispatch)
                    dispatch({
                        type: SAVE_USER,
                        payload: { user },
                    });
                history.push('/home');
            }
        };
        return <SignInForm _handleSignIn={_handleSignIn} />;
    } else {
        return <Redirect to="/home" />;
    }
};

export default SignInPage;
