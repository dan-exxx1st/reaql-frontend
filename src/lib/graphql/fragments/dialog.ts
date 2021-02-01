import gql from 'graphql-tag';

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
            id
            user {
                id
            }
            unreadMessages
            lastMessageStatus
        }
        updatedAt
    }
`;

export const MESSAGE_DATA_FRAGMENT = gql`
    fragment MessageFragment on Message {
        id
        text
        messageDate
        messageStatus
        user {
            id
            name
            surname
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
`;

export const DIALOG_DATA_UPDATE = gql`
    fragment DialogMessageUpdate on Dialog {
        lastMessage
        lastMessageDate
        updatedAt
    }
`;
