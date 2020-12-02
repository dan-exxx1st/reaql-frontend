import React from 'react';
import { Redirect } from 'react-router-dom';

import {
    StyledHomeContacts,
    StyledHomeContactsSearch,
    StyledHomeDialog,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogHeader,
    StyledHomeDialogMessageWrapper,
    StyledHomeDialogTextField,
    StyledHomeSidebar,
    StyledHomeUserHeader,
    StyledHomeWrapper,
    StyledMessageList,
} from './styles/Home';

import { MessageListData } from 'tests/__mocks__/data/unit'; //!Delete after connect to Graphql API
import { ContactListData } from 'tests/__mocks__/data/unit/ContactItem'; //!Delete after connect to Graphql API
import useAuth from 'helpers/useAuth';

const HomePage = () => {
    const auth = useAuth();

    if (auth) {
        return (
            <StyledHomeWrapper>
                <StyledHomeSidebar>
                    <StyledHomeUserHeader />
                    <StyledHomeContactsSearch
                        color="secondary"
                        fieldSize="large"
                        icon="search"
                        placeholder="Search"
                        width="100%"
                    />
                    <StyledHomeContacts contacts={ContactListData} />
                </StyledHomeSidebar>
                <StyledHomeDialog>
                    <StyledHomeDialogHeader />
                    <StyledHomeDialogContentWrapper>
                        <StyledHomeDialogMessageWrapper>
                            <StyledMessageList messages={MessageListData} />
                        </StyledHomeDialogMessageWrapper>
                        <StyledHomeDialogTextField />
                    </StyledHomeDialogContentWrapper>
                </StyledHomeDialog>
            </StyledHomeWrapper>
        );
    }

    return <Redirect to="/signin" />;
};

export default HomePage;
