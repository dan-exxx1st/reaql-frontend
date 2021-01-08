import gql from 'graphql-tag';

export const CREATE_DIALOG_MUTATION = gql`
    mutation createDialog($input: [CreateDialogInput]!) {
        createDialog(input: $input) {
            id
            users {
                id
                email
                name
                surname
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
