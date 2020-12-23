import { gql } from '@apollo/client';

export const DIALOG_DATA_FRAGMENT = gql`
    fragment DialogFragment on Dialog {
        id
        lastMessage
        lastMessageDate
        group
        users {
            id
            name
            surname
            avatar
        }
        dialogProps {
            user {
                id
            }
            unreadMessages
            lastMessageStatus
        }
    }
`;
