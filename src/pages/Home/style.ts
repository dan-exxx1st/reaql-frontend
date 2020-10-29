import styled from 'styled-components';

import { TextField, Wrapper } from 'components/UI';
import {
    UserHeader,
    ContactList,
    DialogHeader,
    DialogTextField,
} from 'components/common';

export const StyledHomeWrapper = styled(Wrapper)``;

// Sidebar components styles
export const StyledHomeSidebar = styled(Wrapper)`
    max-width: 466px;
    width: 100%;
    padding: 20px;
    height: calc(100vh - 80px);
    flex-direction: column;
`;

export const StyledHomeUserHeader = styled(UserHeader)`
    width: calc(100% - 40px);
    padding: 0 20px;
    max-width: 466px;
`;

export const StyledHomeContactsSearch = styled(TextField)`
    margin: 19px;
    width: calc(100% - 40px);

    & > input {
        width: calc(100% - 50px);
    }
`;

export const StyledHomeContacts = styled(ContactList)`
    border-top: 1px solid ${({ theme }) => theme.gc};
    overflow-y: scroll;

    width: 100%;

    & > div {
        width: calc(100% - 40px);
        padding-right: 20px;
        padding-left: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: #fff;
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

export const StyledHomeDialog = styled(Wrapper)``;

export const StyledHomeDialogHeader = styled(DialogHeader)``;

export const StyledHomeDialogContentWrapper = styled(Wrapper)``;

export const StyledHomeDialogMessageWrapper = styled(Wrapper)``;

export const StyledHomeDialogTextField = styled(DialogTextField)``;
