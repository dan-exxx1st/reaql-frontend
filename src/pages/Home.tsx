import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import DialogPage from './Dialog';

import {
    StyledHomeDialog,
    StyledHomeSearchUserModalWrapper,
    StyledHomeWrapper,
} from './styles/Home';

import { SideBar, UserSearchModal } from 'components/common';
import { CheckAuth } from 'helpers/authHelper';
import { Spinner } from 'components/UI';
import { useLoadUser, useUpdateOnlineStatus } from 'helpers/hooks/useUser';
import { useLazyQuery } from '@apollo/client';
import { Query, Subscription } from 'lib/graphql/types';
import { DIALOGS } from 'lib/graphql/queries/dialog';
import { DIALOG_CREATED } from 'lib/graphql/subscriptions/dialog';

const HomePage = () => {
    const isAuth = CheckAuth();
    const { state } = useLoadUser();
    useUpdateOnlineStatus();

    const [searchUserOpened, setSearchUserOpened] = useState(false);

    const [getDialogs, { subscribeToMore, ...result }] = useLazyQuery<Query>(
        DIALOGS,
        {
            pollInterval: 60000,
        }
    );

    const subscribeToNewDialogs = () => {
        if (state && state.user && subscribeToMore) {
            return subscribeToMore({
                document: DIALOG_CREATED,
                variables: { userId: state.user.id },
                updateQuery: (
                    prev,
                    {
                        subscriptionData,
                    }: { subscriptionData: { data: Subscription } }
                ) => {
                    if (!subscriptionData.data) return prev;

                    const newDialogItem = subscriptionData.data.dialogCreated;
                    const prevDialogs =
                        prev && prev.dialogs ? prev.dialogs : [];

                    const newCache = {
                        ...prev,
                        dialogs: [newDialogItem, ...prevDialogs],
                    };

                    return newCache;
                },
            });
        }
    };

    const _handleSearchUserOpened = (val: boolean) => setSearchUserOpened(val);

    useEffect(() => {
        if (state && state.user && state.user.id) {
            getDialogs({
                variables: { userId: state?.user?.id },
            });
        }
    }, [getDialogs, state]);

    if (isAuth) {
        if (state && state.user) {
            return (
                <>
                    {searchUserOpened && (
                        <StyledHomeSearchUserModalWrapper>
                            <UserSearchModal
                                setSearchUserOpened={_handleSearchUserOpened}
                                searchUserOpened={searchUserOpened}
                            />
                        </StyledHomeSearchUserModalWrapper>
                    )}
                    <StyledHomeWrapper>
                        <SideBar
                            setSearchUserOpened={_handleSearchUserOpened}
                            subscribeToNewDialogs={subscribeToNewDialogs}
                            {...result}
                        />

                        <StyledHomeDialog>
                            <DialogPage />
                        </StyledHomeDialog>
                    </StyledHomeWrapper>
                </>
            );
        } else {
            return <Spinner size="100px" />;
        }
    }

    return <Redirect to="/signin" />;
};

export default HomePage;
