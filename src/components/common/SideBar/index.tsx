import React, { FC, useEffect } from 'react';

import {
    StyledSidebarWrapper,
    StyledSidebarUserHeader,
    StyledSidebarDialogsSearch,
    StyledSidebarDialogs,
} from './style';

import { ISideBarProps } from 'lib/types/components/common';

const SideBar: FC<ISideBarProps> = (props) => {
    const { setSearchUserOpened, dialogs, subscribeToNewDialogs } = props;

    useEffect(() => {
        if (subscribeToNewDialogs) subscribeToNewDialogs();
    }, []);

    return (
        <StyledSidebarWrapper>
            <StyledSidebarUserHeader
                setSearchUserOpened={setSearchUserOpened}
            />
            <StyledSidebarDialogsSearch
                color="secondary"
                fieldSize="large"
                icon="search"
                placeholder="Search"
                width="100%"
            />
            {dialogs ? <StyledSidebarDialogs dialogs={dialogs} /> : null}
        </StyledSidebarWrapper>
    );
};

export default SideBar;
