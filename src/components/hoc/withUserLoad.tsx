import React, { FC, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import { SAVE_USER, UserContext } from 'helpers/contexts/userContext';
import { Query } from 'lib/graphql/types';
import { GET_USER } from 'lib/graphql/queries/user';
import { CheckAuth } from 'helpers/authHelper';

const withUserLoad = (Component: FC) => (props: any) => {
    const { state, dispatch } = useContext(UserContext);
    const auth = CheckAuth();

    const [getUser, { data, loading }] = useLazyQuery<Query>(GET_USER);

    useEffect(() => {
        if (auth && !(state && state.user)) {
            const userEmail = localStorage.getItem('userEmail');

            if (!loading) {
                if (!state || (state && !state.user)) {
                    if (data && data.user) {
                        if (dispatch) {
                            dispatch({
                                type: SAVE_USER,
                                payload: { user: data.user },
                            });
                        }
                    } else {
                        getUser({
                            variables: { email: userEmail },
                        });
                    }
                }
            }
        }
    }, [auth, data, dispatch, getUser, loading, state]);

    if (auth) {
        if (!state || (state && !state.user)) {
            return <div>Loading ...</div>;
        } else {
            return <Component {...props} />;
        }
    }

    return <Redirect to="/signin" />;
};

export default withUserLoad;
