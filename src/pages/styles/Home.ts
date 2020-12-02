import styled from 'styled-components';

import { TextField, Wrapper } from 'components/UI';
import {
    UserHeader,
    ContactList,
    DialogHeader,
    DialogTextField,
    MessageList,
} from 'components/common';

export const StyledHomeWrapper = styled(Wrapper)`
    background: ${({ theme }) => theme.wc};
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    max-width: 1440px;
    width: 100%;
    height: calc(100vh - 40px);
    margin: 5px;
`;

// Sidebar components styles
export const StyledHomeSidebar = styled(Wrapper)`
    max-width: 466px;
    width: 100%;
    height: calc(100vh - 40px);
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.gc};
`;

export const StyledHomeUserHeader = styled(UserHeader)`
    width: calc(100% - 40px);
    padding: 20px;
    max-width: 466px;
`;

export const StyledHomeContactsSearch = styled(TextField)`
    margin: 19px;
    margin-top: 0;

    width: calc(100% - 40px);

    & > input {
        width: calc(100% - 50px);
    }
`;

export const StyledHomeContacts = styled(ContactList)`
    border-top: 1px solid ${({ theme }) => theme.gc};
    overflow-y: scroll;

    width: 100%;

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.wc};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1px;
        background-color: ${({ theme }) => theme.gc};
        height: 100px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
`;

//Dialog components styles

export const StyledHomeDialog = styled(Wrapper)`
    flex-direction: column;
    width: 100%;
`;

export const StyledHomeDialogHeader = styled(DialogHeader)`
    padding: 20px;
    width: calc(100% - 40px);
`;

export const StyledHomeDialogContentWrapper = styled(Wrapper)`
    flex-direction: column-reverse;
    background: ${({ theme }) => theme.lbc};
    width: calc(100% - 40px);
    height: calc(100vh - 160px);
    padding: 20px;
    position: relative;
`;

export const StyledHomeDialogMessageWrapper = styled(Wrapper)`
    width: calc(100% - 80px);
    height: calc(100% - 130px);
    position: absolute;
    top: 20px;
    left: 20px;
    background: ${({ theme }) => theme.wc};
    border-radius: 3px;
    padding: 20px 20px 0 20px;
    flex-direction: column-reverse;
`;

export const StyledMessageList = styled(MessageList)``;

export const StyledHomeDialogTextField = styled(DialogTextField)`
    width: 100%;
`;
