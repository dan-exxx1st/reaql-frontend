import gql from 'graphql-tag';
import {
    DIALOG_DATA_FRAGMENT,
    MESSAGE_DATA_FRAGMENT,
} from '../fragments/dialog';

export const DIALOG_CREATED = gql`
    subscription DIALOG_CREATED($userId: String!) {
        dialogCreated(userId: $userId) {
            ...DialogFragment
        }
    }
    ${DIALOG_DATA_FRAGMENT}
`;

export const DIALOG_UPDATED = gql`
    subscription DIALOG_UPDATED($dialogId: String!) {
        dialogUpdated(dialogId: $dialogId) {
            id
            lastMessage
            lastMessageDate
            updatedAt
        }
    }
`;

export const MESSAGE_CREATED = gql`
    subscription MESSAGE_CREATED($dialogId: String!) {
        messageCreated(dialogId: $dialogId) {
            ...MessageFragment
        }
    }

    ${MESSAGE_DATA_FRAGMENT}
`;
