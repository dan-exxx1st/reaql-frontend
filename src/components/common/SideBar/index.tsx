import React, { FC } from 'react';

import {
    StyledSidebarWrapper,
    StyledHomeUserHeader,
    StyledHomeContactsSearch,
    StyledHomeContacts,
} from './style';

interface IProps {
    setSearchUserOpened?: (val: boolean) => void;
}

const SideBar: FC<IProps> = (props) => {
    const { setSearchUserOpened } = props;

    return (
        <StyledSidebarWrapper>
            <StyledHomeUserHeader setSearchUserOpened={setSearchUserOpened} />
            <StyledHomeContactsSearch
                color="secondary"
                fieldSize="large"
                icon="search"
                placeholder="Search"
                width="100%"
            />
            <StyledHomeContacts />
        </StyledSidebarWrapper>
    );
};

export default SideBar;
