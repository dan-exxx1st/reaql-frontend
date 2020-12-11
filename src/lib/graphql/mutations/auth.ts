import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation CreateUser(
        $email: String!
        $name: String!
        $surname: String!
        $password: String!
    ) {
        signUp(
            input: {
                email: $email
                name: $name
                surname: $surname
                password: $password
            }
        ) {
            user {
                id
                email
                name
                surname
            }
            session {
                id
                accessToken
                refreshToken
            }
        }
    }
`;

export const SIGN_IN = gql`
    mutation signInMutation(
        $email: String!
        $password: String!
        $rememberMe: Boolean = false
    ) {
        signIn(
            input: {
                email: $email
                password: $password
                rememberUser: $rememberMe
            }
        ) {
            user {
                id
                email
                name
                surname
            }
            session {
                id
                accessToken
                refreshToken
            }
        }
    }
`;

export const REFRESH_SESSION = gql`
    mutation refreshSession($refreshToken: String!) {
        refreshSession(refreshToken: $refreshTokenq) {
            id
            accessToken
            refreshToken
        }
    }
`;
