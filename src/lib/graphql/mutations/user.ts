import gql from 'graphql-tag';
import { USER_FRAGMENT } from '../fragments/user';

export const UPDATE_ONLINE_STATUS = gql`
    mutation UpdateOnlineStatus($userId: String!, $status: String!) {
        updateOnlineStatus(input: { userId: $userId, status: $status }) {
            ...UserFragment
        }
    }

    ${USER_FRAGMENT}
`;
