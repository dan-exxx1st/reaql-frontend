import gql from 'graphql-tag';
import { DIALOG_DATA_FRAGMENT } from '../fragments/dialog';

export const GET_DIALOGS_QUERY = gql`
    query GetDialogs($userId: String!) {
        dialogs(userId: $userId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;

export const GET_DIALOG = gql`
    query GetDialog($dialogId: String!) {
        dialog(dialogId: $dialogId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;
