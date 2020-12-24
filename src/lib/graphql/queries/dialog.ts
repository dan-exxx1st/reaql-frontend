import { gql } from '@apollo/client';
import { DIALOG_DATA_FRAGMENT } from '../fragments/dialog';

export const GET_DIALOGS = gql`
    query GET_DIALOGS($userId: String!) {
        dialogs(userId: $userId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;

export const GET_DIALOG = gql`
    query GET_DIALOG($dialogId: String!) {
        dialog(dialogId: $dialogId) {
            ...DialogFragment
        }
    }

    ${DIALOG_DATA_FRAGMENT}
`;
