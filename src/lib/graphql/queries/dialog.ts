import gql from 'graphql-tag';
import {
    DIALOG_DATA_FRAGMENT,
    MESSAGE_DATA_FRAGMENT,
} from '../fragments/dialog';

export const DIALOGS = gql`
    query Dialogs($userId: String!) {
        dialogs(userId: $userId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;

export const DIALOG = gql`
    query Dialogs($dialogId: String!) {
        dialog(dialogId: $dialogId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;

export const MESSAGES = gql`
    query Messages($dialogId: String!) {
        messages(dialogId: $dialogId) {
            ...MessageFragment
        }
    }

    ${MESSAGE_DATA_FRAGMENT}
`;
