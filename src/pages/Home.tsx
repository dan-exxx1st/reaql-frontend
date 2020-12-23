import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { parse } from 'querystring';

import {
    StyledHomeDialog,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogHeader,
    StyledHomeDialogMessageWrapper,
    StyledHomeDialogTextField,
    StyledHomeSearchUserModalWrapper,
    StyledHomeWrapper,
    StyledMessageList,
} from './styles/Home';

import { checkAuth } from 'helpers/authHelper';
import { UserSearchModal } from 'components/common';
import { SideBarWithData } from 'components/data';

const HomePage = () => {
    const auth = checkAuth();
    const [searchUserOpened, setSearchUserOpened] = useState(false);

    if (auth) {
        const { search } = useLocation();
        const params = parse(search);

        const dialogId = Object.entries(params)
            .map(([key, value]) => key.indexOf('dialog') !== -1 && value)
            .toString();

        return (
            <>
                {searchUserOpened && (
                    <StyledHomeSearchUserModalWrapper>
                        <UserSearchModal
                            setSearchUserOpened={setSearchUserOpened}
                            searchUserOpened={searchUserOpened}
                        />
                    </StyledHomeSearchUserModalWrapper>
                )}
                <StyledHomeWrapper>
                    <SideBarWithData
                        setSearchUserOpened={setSearchUserOpened}
                    />

                    {dialogId && (
                        <StyledHomeDialog>
                            <StyledHomeDialogHeader />
                            <StyledHomeDialogContentWrapper>
                                <StyledHomeDialogMessageWrapper>
                                    <StyledMessageList />
                                </StyledHomeDialogMessageWrapper>
                                <StyledHomeDialogTextField />
                            </StyledHomeDialogContentWrapper>
                        </StyledHomeDialog>
                    )}
                </StyledHomeWrapper>
            </>
        );
    }

    return <Redirect to="/signin" />;
};

export default HomePage;
