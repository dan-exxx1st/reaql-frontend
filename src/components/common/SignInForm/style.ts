import styled from 'styled-components';

import { Button, TextField, Typography, Wrapper } from 'components/UI';

export const StyledSignInFormWrapper = styled(Wrapper)`
    max-width: 450px;
    width: calc(100% - 15px);
    padding: 15px;

    background: ${({ theme }) => theme.wc};
    border-radius: 2px;
    box-shadow: ${({ theme }) => theme.formBoxShadow};

    flex-wrap: wrap;
`;

export const StyledSignFormElementsWrapper = styled(Wrapper)`
    width: 100%;

    justify-content: space-between;

    &:last-child {
        margin-top: 40px;
    }

    & > button,
    input,
    p {
        cursor: pointer;
    }

    & > p {
        &:hover {
            box-shadow: 1px 4px 10px rgb(10, 10, 10, 0.05);
        }
    }
`;

export const StyledSignInFormTitle = styled(Typography)`
    margin-bottom: 40px;
`;

export const StyledSignInFormTextField = styled(TextField)`
    width: calc(100% - 10px);
    margin-bottom: 20px;

    & > input {
        width: 100%;
    }
`;

export const StyledSignInFormSignInBtn = styled(Button)``;

export const StyledSignInFormSignUpBtn = styled(Button)``;
