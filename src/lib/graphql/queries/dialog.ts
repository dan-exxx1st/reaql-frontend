import { gql } from '@apollo/client';

export const GET_DIALOGS = gql`
    query GET_DIALOGS($userId: String!) {
        dialogs(userId: $userId) {
            id
            users {
                id
                name
                surname
            }
            dialogProps {
                user {
                    id
                }
                userRole
            }
        }
    }
`;
