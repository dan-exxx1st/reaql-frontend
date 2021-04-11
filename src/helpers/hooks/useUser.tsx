import { useCallback, useContext, useEffect } from 'react';
import { CheckAuth } from 'helpers/authHelper';
import { SAVE_USER, UserContext } from 'helpers/contexts/userContext';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_USER } from 'lib/graphql/queries/user';
import { Mutation } from 'lib/graphql/types';
import { UPDATE_ONLINE_STATUS } from 'lib/graphql/mutations/user';

const useLoadUser = () => {
    const isAuth = CheckAuth();
    const { state, dispatch } = useContext(UserContext);

    const [loadUser, { data, loading, error }] = useLazyQuery(GET_USER);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
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
    }, [data, dispatch, error, isAuth, loadUser, loading, state]);

    return {
        state,
        dispatch,
    };
};

const useUpdateOnlineStatus = () => {
    const [updateOnlineStatus] = useMutation<Mutation>(UPDATE_ONLINE_STATUS);
    const { state } = useContext(UserContext);

    const updateStatus = useCallback(
        (status: string) => {
            if (state && state.user) {
                updateOnlineStatus({
                    variables: {
                        userId: state?.user?.id,
                        status,
                    },
                });
            }
        },
        [state, updateOnlineStatus]
    );

    useEffect(() => {
        if (state && state.user && state.user.id) {
            updateStatus('online');
        }

        window.addEventListener('beforeunload', () =>
            updateStatus(String(new Date()))
        );

        return () =>
            window.removeEventListener('beforeunload', () => updateStatus);
    }, [state, updateOnlineStatus, updateStatus]);
};

export { useLoadUser, useUpdateOnlineStatus };
