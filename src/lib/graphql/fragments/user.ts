import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment UserFragment on User {
        id
        email
        name
        surname
        avatar
        online
    }
`;

export const UPDATE_ONLINE_STATUS = gql`
    fragment UserOnline on User {
        id
        online
    }
`;
