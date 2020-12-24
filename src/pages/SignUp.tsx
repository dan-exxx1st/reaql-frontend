import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CheckAuth, setUserAndSession } from 'helpers/authHelper';
import { SAVE_USER, UserContext } from 'helpers/contexts/userContext';

import { SIGN_UP } from 'lib/graphql/mutations/auth';
import { Mutation } from 'lib/graphql/types';

import { SignUpForm } from 'components/common';
import { StyledSignUpWrapper } from './styles/SignUp';

const SignUpPage = () => {
    const auth = CheckAuth();
    const [state, setState] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
    });
    const history = useHistory();
    const [signUp] = useMutation<Mutation>(SIGN_UP);
    const { dispatch } = useContext(UserContext);

    if (!auth) {
        const changeFormValues = (field: string, value: string) => {
            setState({
                ...state,
                [field]: value,
            });
        };

        const handleSubmit = async () => {
            const { email, name, surname, password } = state;
            const { data } = await signUp({
                variables: { email: email, name, surname, password },
            });
            if (data) {
                const { signUp } = data;
                const { session, user } = signUp;

                setUserAndSession({ user, session });

                if (dispatch)
                    dispatch({
                        type: SAVE_USER,
                        payload: { user },
                    });
                history.push('/home');
            }
        };

        return (
            <StyledSignUpWrapper>
                <SignUpForm
                    {...state}
                    changeFormValues={changeFormValues}
                    handleSubmit={handleSubmit}
                />
            </StyledSignUpWrapper>
        );
    }
    return <Redirect to="/home" />;
};

export default SignUpPage;
