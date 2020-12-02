import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

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

const HomePage: NextPage = () => {
    const isAuth = useContext(AuthContext);
    const router = useRouter();

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

HomePage.getInitialProps = async ({ res }) => {
    console.log(res?.getHeaders());
    return {};
};

export default HomePage;
