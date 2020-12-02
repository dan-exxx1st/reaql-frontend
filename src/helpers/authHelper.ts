export const checkAuth = () => {
    if (typeof window != 'undefined' && window.document) {
        const sessionString = localStorage.getItem('session');
        if (sessionString) {
            const session = JSON.parse(sessionString);

            if (session.accessToken && session.refreshToken) {
                return true;
            }
        }
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
