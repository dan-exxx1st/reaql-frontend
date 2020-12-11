import styled from 'styled-components';

import { TextField, Wrapper } from 'components/UI';
import UserHeader from '../UserHeader';
import ContactList from '../ContactList';

export const StyledSidebarWrapper = styled(Wrapper)`
    max-width: 466px;
    width: 100%;
    height: calc(100vh - 40px);
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.gc};
`;

export const StyledHomeUserHeader = styled(UserHeader)`
    width: 100%;
    padding: 10px 0;
`;

export const StyledHomeContactsSearch = styled(TextField)`
    padding: 0 15px;
    margin-bottom: 20px;
    width: calc(100% - 30px);

    & > input {
        width: calc(100% - 50px);
    }

    & > img {
        right: 25px;
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
