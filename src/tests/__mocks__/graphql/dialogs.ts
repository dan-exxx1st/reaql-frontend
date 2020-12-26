import { GET_DIALOG } from 'lib/graphql/queries/dialog';
import { DialogsMockData } from '../data/graphql';

export const DialogsMock = [
    {
        request: {
            query: GET_DIALOG,
            variables: {
                dialogId: '1',
            },
        },
        result: () => {
            return {
                data: {
                    dialog: DialogsMockData[0],
                },
            };
        },
    },
];
