import React, { FC, useContext } from 'react';
import { useQuery } from '@apollo/client';

import {
    StyledSidebarWrapper,
    StyledSidebarUserHeader,
    StyledSidebarDialogsSearch,
    StyledSidebarDialogs,
} from './style';

import { GET_DIALOGS } from 'lib/graphql/queries/dialog';
import { UserContext } from 'helpers/contexts/userContext';
import { Query } from 'lib/graphql/types';

interface IProps {
    setSearchUserOpened?: (val: boolean) => void;
}

const SideBar: FC<IProps> = (props) => {
    const { setSearchUserOpened } = props;
    const { state: UserState } = useContext(UserContext);

    const { data } = useQuery<Query>(GET_DIALOGS, {
        variables: { userId: UserState?.user?.id },
    });

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
            {data && data.dialogs ? (
                <StyledSidebarDialogs dialogs={data?.dialogs} />
            ) : null}
        </StyledSidebarWrapper>
    );
};

export default SideBar;
