import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SignUpForm } from 'components/common';
import { StyledSignUpWrapper } from './styles/SignUp';

import { SIGN_UP } from 'lib/graphql/mutations/auth';
import { Mutation } from 'lib/graphql/types';

const SignUpPage = () => {
    const [state, setState] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
    });

    const [signUp] = useMutation<Mutation>(SIGN_UP);

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
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('session', JSON.stringify(session));
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
};

export default SignUpPage;
