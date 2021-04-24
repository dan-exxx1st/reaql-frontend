import { Session, User } from 'lib/graphql/types';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

export const CheckAuth = () => {
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
        const {
            accessToken,
            refreshToken,
        }: { accessToken: string; refreshToken: string } = JSON.parse(session);

        return { accessToken, refreshToken };
    } else {
        return { accessToken: '', refreshToken: '' };
    }
};

export const setSession = (session: {
    refreshToken: string;
    accessToken: string;
}) => {
    const sessionData = {
        accessToken: session.accessToken,
        refreshToken: session.refreshToken,
    };
    const sessionString = JSON.stringify(sessionData);
    localStorage.setItem('session', sessionString);
};

export const setUserAndSession = (payload: {
    user: User;
    session?: Session | null;
}) => {
    const { user, session } = payload;
    if (session) setSession(session);
    localStorage.setItem('userEmail', user.email);
};

export const clearSession = () => {
    localStorage.clear();
    window.location.reload();
};
