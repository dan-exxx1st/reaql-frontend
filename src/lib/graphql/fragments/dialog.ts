import gql from 'graphql-tag';
import { USER_FRAGMENT } from './user';

export const DIALOG_DATA_FRAGMENT = gql`
    fragment DialogFragment on Dialog {
        id
        lastMessage
        lastMessageDate
        group
        users {
            ...UserFragment
        }
        dialogProps {
            id
            user {
                id
            }
            unreadMessages
            lastMessageStatus
        }
        updatedAt
    }

    ${USER_FRAGMENT}
`;

export const MESSAGE_DATA_FRAGMENT = gql`
    fragment MessageFragment on Message {
        id
        text
        messageDate
        messageStatus
        user {
            ...UserFragment
        }
        dialog {
            id
            dialogProps {
                id
                user {
                    id
                    name
                }
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const DIALOG_DATA_UPDATE = gql`
    fragment DialogMessageUpdate on Dialog {
        lastMessage
        lastMessageDate
        updatedAt
    }
`;
