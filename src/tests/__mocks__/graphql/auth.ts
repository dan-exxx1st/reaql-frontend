import { SIGN_IN, SIGN_UP } from 'lib/graphql/mutations/auth';

const TestUser = {
    email: 'testuser@test.com',
    name: 'test',
    surname: 'user',
    password: 'testpass',
};

const TestUser2 = {
    email: 'testuser2@test.com',
    password: 'testpass2',
};

export const AuthMocks = [
    {
        request: {
            query: SIGN_UP,
            variables: {
                ...TestUser,
            },
        },
        result: {
            data: {
                signUp: {
                    user: {
                        id: '1',
                        ...TestUser,
                    },
                    session: {
                        id: '1',
                        accessToken: 'testaccesstoken',
                        refreshToken: 'testrefreshtoken',
                    },
                },
            },
        },
    },
    {
        request: {
            query: SIGN_IN,
            variables: {
                ...TestUser2,
                rememberMe: true,
            },
        },
        result: {
            data: {
                signIn: {
                    user: {
                        id: '2',
                        ...TestUser2,
                    },
                    session: {
                        id: '2',
                        accessToken: 'testaccesstoken2',
                        refreshToken: 'testrefreshtoken2',
                    },
                },
            },
        },
    },
];
