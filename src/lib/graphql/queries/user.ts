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

export const SEARCH_USERS = gql`
    query SEARCH_USERS($email: String!, $selfEmail: String!) {
        searchUsers(email: $email, selfEmail: $selfEmail) {
            id
            email
            name
            surname
            avatar
        }
    }
`;
