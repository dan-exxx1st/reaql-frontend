import React, { FC, useEffect, useState } from 'react';

import {
    StyledSidebarWrapper,
    StyledSidebarUserHeader,
    StyledSidebarDialogsSearch,
    StyledSidebarDialogs,
} from './style';

import { ISideBarProps } from 'lib/types/components/common';

const SideBar: FC<ISideBarProps> = (props) => {
    const [dialogFilter, setDialogFilter] = useState('');
    const { setSearchUserOpened, data, loading, subscribeToNewDialogs } = props;

    useEffect(() => {
        let unsubscribe: any;
        if (subscribeToNewDialogs) {
            unsubscribe = subscribeToNewDialogs();
        }

        return () => unsubscribe();
    }, [subscribeToNewDialogs]);

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
                value={dialogFilter}
                onChange={setDialogFilter}
            />
            {!loading && data && data.dialogs ? (
                <StyledSidebarDialogs
                    dialogFilter={dialogFilter}
                    dialogs={data.dialogs}
                />
            ) : null}
        </StyledSidebarWrapper>
    );
};

export default SideBar;
