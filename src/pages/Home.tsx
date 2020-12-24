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

import { CheckAuth } from 'helpers/authHelper';
import { UserSearchModal } from 'components/common';
import { SideBarWithData } from 'components/data';
import withUserLoad from 'components/hoc/withUserLoad';

const HomePage = () => {
    const auth = CheckAuth();
    const [searchUserOpened, setSearchUserOpened] = useState(false);
    const { search } = useLocation();

    if (auth) {
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

export default withUserLoad(HomePage);
