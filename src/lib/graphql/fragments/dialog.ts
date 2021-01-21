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
            user {
                id
            }
            unreadMessages
            lastMessageStatus
        }
    }
`;

export const MESSAGE_DATA_FRAGMENT = gql`
    fragment MessageFragment on Message {
        id
        text
        messageDate
        messageStatus
        user {
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
