import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

import { UserSearchModal } from 'components/common';
import { SideBarWithData } from 'components/data';
import withUserLoad from 'components/hoc/withUserLoad';
import { getDialogIdFromSearch } from 'helpers';

const HomePage = () => {
    const [searchUserOpened, setSearchUserOpened] = useState(false);
    const { search } = useLocation();

    const dialogId = getDialogIdFromSearch(search);

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
                <SideBarWithData setSearchUserOpened={setSearchUserOpened} />

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
};

export default withUserLoad(HomePage);
