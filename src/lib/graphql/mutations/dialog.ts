import gql from 'graphql-tag';
import { MESSAGE_DATA_FRAGMENT } from '../fragments/dialog';

export const CREATE_DIALOG_MUTATION = gql`
    mutation createDialog($input: [CreateDialogInput]!) {
        createDialog(input: $input) {
            id
            users {
                id
                email
                name
                surname
                online
            }
            dialogProps {
                id
                user {
                    id
                    name
                }
                userRole
            }
        }
    }
`;

export const CREATE_MESSAGE = gql`
    mutation createMessage(
        $dialogId: String!
        $userId: String!
        $text: String!
    ) {
        createMessage(
            input: { dialogId: $dialogId, userId: $userId, text: $text }
        ) {
            ...MessageFragment
        }
    }

    ${MESSAGE_DATA_FRAGMENT}
`;
