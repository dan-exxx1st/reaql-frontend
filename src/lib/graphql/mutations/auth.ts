import gql from 'graphql-tag';
import { USER_FRAGMENT } from '../fragments/user';

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
                ...UserFragment
            }
            session {
                id
                accessToken
                refreshToken
            }
        }
    }
    ${USER_FRAGMENT}
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
                ...UserFragment
            }
            session {
                id
                accessToken
                refreshToken
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const REFRESH_SESSION = gql`
    mutation refreshSession($refreshToken: String!) {
        refreshSession(refreshToken: $refreshToken) {
            id
            accessToken
            refreshToken
        }
    }
`;
