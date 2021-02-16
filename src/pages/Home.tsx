import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';

import DialogPage from './Dialog';

import {
    StyledHomeDialog,
    StyledHomeSearchUserModalWrapper,
    StyledHomeWrapper,
} from './styles/Home';

import { UserSearchModal } from 'components/common';
import { SideBarWithData } from 'components/data';
import { UserContext, SAVE_USER } from 'helpers/contexts/userContext';
import { GET_USER } from 'lib/graphql/queries/user';
import { CheckAuth } from 'helpers/authHelper';
import { UPDATE_ONLINE_STATUS } from 'lib/graphql/mutations/user';
import { Mutation } from 'lib/graphql/types';

const HomePage = () => {
    const isAuth = CheckAuth();
    const { state, dispatch } = useContext(UserContext);
    const userEmail = localStorage.getItem('userEmail');

    const [loadUser, { data, loading, error }] = useLazyQuery(GET_USER);
    const [updateOnlineStatus] = useMutation<Mutation>(UPDATE_ONLINE_STATUS);

    const updateStatus = useCallback(
        (status: string) => {
            updateOnlineStatus({
                variables: {
                    userId: state?.user?.id,
                    status,
                },
            });
        },
        [state?.user?.id, updateOnlineStatus]
    );

    useEffect(() => {
        if (isAuth && state && state.user && state.user.id) {
            updateStatus('online');
        }

        window.addEventListener('beforeunload', () =>
            updateStatus(String(new Date()))
        );

        return () =>
            window.removeEventListener('beforeunload', () => updateStatus);
    }, [isAuth, state, updateOnlineStatus, updateStatus]);

    useEffect(() => {
        if (!state || (!state.user && isAuth)) {
            if (!data && !loading && !error) {
                loadUser({
                    variables: {
                        email: userEmail,
                    },
                });
            }
            if (data && !loading && !error) {
                if (dispatch) {
                    dispatch({
                        type: SAVE_USER,
                        payload: { user: data.user },
                    });
                }
            }
        }
    }, [data, dispatch, error, isAuth, loadUser, loading, state, userEmail]);

    const [searchUserOpened, setSearchUserOpened] = useState(false);
    if (isAuth) {
        if (!loading && !error && state && state.user) {
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

                        <StyledHomeDialog>
                            <DialogPage />
                        </StyledHomeDialog>
                    </StyledHomeWrapper>
                </>
            );
        } else {
            return <div>Loading ...</div>;
        }
    }

    return <Redirect to="/signin" />;
};

export default HomePage;
