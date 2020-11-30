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
