import gql from 'graphql-tag';
import { DIALOG_DATA_FRAGMENT } from '../fragments/dialog';

export const DIALOG_CREATED = gql`
    subscription DIALOG_CREATED($userId: String!) {
        dialogCreated(userId: $userId) {
            ...DialogFragment
        }
    }
    ${DIALOG_DATA_FRAGMENT}
`;
