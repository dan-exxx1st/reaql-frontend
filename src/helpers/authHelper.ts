import { Session } from 'lib/graphql/types';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

export const checkAuth = () => {
    const { state } = useContext(UserContext);
    const sessionString = localStorage.getItem('session');
    if (sessionString || state?.user?.email) {
        return true;
    }
    return false;
};

export const getAuthTokens = () => {
    const session = localStorage.getItem('session');
    if (session) {
        const { accessToken, refreshToken } = JSON.parse(session);

        return { accessToken, refreshToken };
    } else {
        return { accessToken: '', refreshToken: '' };
    }
};

export const setSession = (session: Session) => {
    const sessionString = JSON.stringify(session);
    localStorage.setItem('session', sessionString);
};

export const clearSession = () => {
    localStorage.removeItem('session');
};
