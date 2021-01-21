import React, { useContext, useEffect, useState } from 'react';

import {
    StyledHomeDialog,
    StyledHomeSearchUserModalWrapper,
    StyledHomeWrapper,
} from './styles/Home';

import { UserSearchModal } from 'components/common';
import { SideBarWithData } from 'components/data';
import { useLazyQuery } from '@apollo/client';
import { UserContext, SAVE_USER } from 'helpers/contexts/userContext';
import { GET_USER } from 'lib/graphql/queries/user';
import DialogPage from './Dialog';

const HomePage = () => {
    const { state, dispatch } = useContext(UserContext);
    const userEmail = localStorage.getItem('userEmail');

    const [loadUser, { data, loading, error }] = useLazyQuery(GET_USER);

    useEffect(() => {
        if (!state || !state.user) {
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
    }, [data, dispatch, error, loadUser, loading, state, userEmail]);

    const [searchUserOpened, setSearchUserOpened] = useState(false);

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
};

export default HomePage;
