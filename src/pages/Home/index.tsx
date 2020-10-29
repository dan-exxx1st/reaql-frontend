import React from 'react';

import {
    StyledHomeWrapper,
    StyledHomeSidebar,
    StyledHomeDialog,
    StyledHomeUserHeader,
    StyledHomeContactsSearch,
    StyledHomeContacts,
    StyledHomeDialogHeader,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogMessageWrapper,
    StyledHomeDialogTextField,
} from './style';

import { ContactListData } from 'tests/__mocks__/data/unit/ContactItem'; //!Delete after connect to Graphql API

const HomePage = () => {
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
                    <StyledHomeDialogMessageWrapper></StyledHomeDialogMessageWrapper>
                    <StyledHomeDialogTextField />
                </StyledHomeDialogContentWrapper>
            </StyledHomeDialog>
        </StyledHomeWrapper>
    );
};

export default HomePage;
