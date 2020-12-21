import styled from 'styled-components';

import { TextField, Typography, Wrapper } from 'components/UI';

export const StyledUserSearchModalWrapper = styled(Wrapper)`
    background: #fafafa;
    box-shadow: 0px 0px 15px #555555;
    border-radius: 5px;
    width: 360px;
    padding: 20px;
    flex-direction: column;
`;

export const StyledUserSearchModalTitle = styled(Typography)`
    margin-bottom: 40px;
`;

export const StyledUserSearchModalTextField = styled(TextField)`
    width: calc(100% - 12px);
    margin-bottom: 20px;

    & > input {
        width: calc(100% - 12px);
        padding-right: 5px;
    }
`;

export const StyledUserSearchModalUsersWrapper = styled(Wrapper)`
    width: 100%;

    flex-direction: column;
    border-radius: 3px;
    overflow-y: scroll;
    height: 60vh;

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.wc};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1px;
        background-color: ${({ theme }) => theme.pc};
        height: 100px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
`;

export const StyledUserSearchModalUserItem = styled(Wrapper)``;
