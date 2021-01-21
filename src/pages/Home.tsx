import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

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

const HomePage = () => {
    const isAuth = CheckAuth();
    const { state, dispatch } = useContext(UserContext);
    const userEmail = localStorage.getItem('userEmail');

    const [loadUser, { data, loading, error }] = useLazyQuery(GET_USER);

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
