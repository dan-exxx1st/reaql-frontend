import React, { FC, useState } from 'react';

import { ISignUpFormProps } from 'lib/types/components/common';

import { Wrapper } from 'components/UI';

import {
    StyledSignUpForm,
    StyledSignUpTextField,
    StyledSignUpFormTitle,
    StyledSignUpFormConfirmBtn,
    StyledSignUpFormLoginBtn,
    StyledSignUpBottomBtnWrapper,
} from './style';

const SignInForm: FC<ISignUpFormProps> = (props) => {
    const {
        email,
        name,
        surname,
        password,
        changeFormValues,
        handleSubmit,
    } = props;

    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    return (
        <StyledSignUpForm>
            <StyledSignUpFormTitle variant="h4">
                Create an account
            </StyledSignUpFormTitle>
            <Wrapper flexWrap="wrap">
                <StyledSignUpTextField
                    color="secondary"
                    fieldSize="large"
                    placeholder="Name"
                    marginRight
                    value={name}
                    onChange={(val) => changeFormValues('name', val)}
                />
                <StyledSignUpTextField
                    color="secondary"
                    fieldSize="large"
                    placeholder="Surname"
                    value={surname}
                    onChange={(val) => changeFormValues('surname', val)}
                />
            </Wrapper>
            <StyledSignUpTextField
                color="secondary"
                fieldSize="large"
                placeholder="Email adress"
                marginTop
                fullSize
                type="email"
                value={email}
                onChange={(val) => changeFormValues('email', val)}
            />
            <StyledSignUpTextField
                color="secondary"
                fieldSize="large"
                placeholder="Password"
                marginTop
                fullSize
                type="password"
                value={password}
                onChange={(val) => changeFormValues('password', val)}
            />
            <StyledSignUpTextField
                color="secondary"
                fieldSize="large"
                placeholder="Confirm password"
                marginTop
                fullSize
                type="password"
                value={confirmPasswordValue}
                onChange={(val) => setConfirmPasswordValue(val)}
            />
            <StyledSignUpBottomBtnWrapper>
                <StyledSignUpFormConfirmBtn
                    color="primary"
                    variant="filled"
                    onClick={handleSubmit}
                >
                    Create account
                </StyledSignUpFormConfirmBtn>

                <StyledSignUpFormLoginBtn color="secondary" variant="outlined">
                    Login in
                </StyledSignUpFormLoginBtn>
            </StyledSignUpBottomBtnWrapper>
        </StyledSignUpForm>
    );
};

export default SignInForm;
