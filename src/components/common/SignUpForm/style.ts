import styled from 'styled-components';

import { Button, TextField, Typography, Wrapper } from 'components/UI';

export const StyledSignUpForm = styled(Wrapper)`
    flex-wrap: wrap;
    padding: 15px;
    max-width: 450px;
    background: ${({ theme }) => theme.wc};
    border-radius: 5px;
    box-shadow: 4px 5px 10px rgba(37, 37, 37, 0.15);
`;

export const StyledSignUpBottomBtnWrapper = styled(Wrapper)`
    width: calc(100% - 19px);
    margin-top: 40px;
    justify-content: space-between;
`;

export const StyledSignUpFormTitle = styled(Typography)`
    margin-bottom: 40px;
`;

export const StyledSignUpFormConfirmBtn = styled(Button)``;
export const StyledSignUpFormLoginBtn = styled(Button)``;

export const StyledSignUpTextField = styled(TextField)<{
    marginRight?: boolean;
    marginTop?: boolean;
    fullSize?: boolean;
}>`
    margin-right: ${({ marginRight }) => (marginRight ? '20px' : 0)};
    margin-top: ${({ marginTop }) => (marginTop ? '20px' : 0)};
    ${({ fullSize }) => {
        const width = fullSize ? 'calc(100% - 15px)' : '200px';

        return `
                width:${width};
                & > input{
                    width:${width};
                }
       `;
    }};
`;
