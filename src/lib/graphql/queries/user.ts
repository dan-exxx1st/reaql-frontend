import { gql } from '@apollo/client';

export const GET_USER = gql`
    query GET_USER($email: String!) {
        user(email: $email) {
            id
            email
            name
            surname
            avatar
            createdAt
            updatedAt
        }
    }
`;

export const GET_USERS_BY_EMAIL = gql`
    query UsersByEmail($email: String!) {
        findUsersByEmail(email: $email) {
            id
            email
            name
            surname
        }
    }
`;
