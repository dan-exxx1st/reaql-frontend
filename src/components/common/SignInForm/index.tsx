import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { ISignInFormProps } from 'lib/types/components/common';

import { CheckBox, Typography } from 'components/UI';
import {
    StyledSignInFormWrapper,
    StyledSignInFormTitle,
    StyledSignInFormTextField,
    StyledSignFormElementsWrapper,
    StyledSignInFormSignInBtn,
    StyledSignInFormSignUpBtn,
} from './style';

const SignInForm: FC<ISignInFormProps> = (props) => {
    const { _handleSignIn } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const _handleSignUpRedirect = () => {
        router.push('/signup');
    };

    const _handleLogin = () => {
        _handleSignIn({ email, password, rememberMe });
    };

    return (
        <StyledSignInFormWrapper>
            <StyledSignInFormTitle variant="h3">
                Sign in account
            </StyledSignInFormTitle>
            <StyledSignInFormTextField
                color="secondary"
                fieldSize="large"
                placeholder="Email"
                type="email"
                value={email}
                onChange={setEmail}
            />
            <StyledSignInFormTextField
                color="secondary"
                fieldSize="large"
                placeholder="Password"
                type={!showPassword ? 'password' : 'text'}
                value={password}
                onChange={setPassword}
            />
            <StyledSignFormElementsWrapper>
                <CheckBox
                    text="Remember me"
                    onClick={() => setRememberMe(!rememberMe)}
                />
                <CheckBox
                    text="Show password"
                    onClick={() => setShowPassword(!showPassword)}
                />
                <Typography variant="caption1" color="dgc">
                    Forgot password
                </Typography>
            </StyledSignFormElementsWrapper>
            <StyledSignFormElementsWrapper>
                <StyledSignInFormSignInBtn
                    variant="filled"
                    color="primary"
                    onClick={_handleLogin}
                >
                    Sign in
                </StyledSignInFormSignInBtn>
                <StyledSignInFormSignUpBtn
                    variant="outlined"
                    color="secondary"
                    onClick={_handleSignUpRedirect}
                >
                    Sign up
                </StyledSignInFormSignUpBtn>
            </StyledSignFormElementsWrapper>
        </StyledSignInFormWrapper>
    );
};

export default SignInForm;
