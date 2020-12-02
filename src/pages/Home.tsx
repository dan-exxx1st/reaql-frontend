import React, { useContext, useEffect } from 'react';
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

import AuthContext from 'helpers/contexts/authContext';

import { MessageListData } from 'tests/__mocks__/data/unit'; //!Delete after connect to Graphql API
import { ContactListData } from 'tests/__mocks__/data/unit/ContactItem'; //!Delete after connect to Graphql API

const HomePage = () => {
    const isAuth = useContext(AuthContext);
    const router: any = {}; //!CHANGE

    useEffect(() => {
        if (!isAuth) {
            router.push('/signin');
        }
    }, []);
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
};

export default HomePage;
