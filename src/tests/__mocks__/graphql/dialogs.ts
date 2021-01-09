import { GET_DIALOGS_QUERY } from 'lib/graphql/queries/dialog';
import { DIALOG_CREATED } from 'lib/graphql/subscriptions/dialog';
import { DialogsMockData } from '../data/graphql';

export const DialogsMock = [
    {
        request: {
            query: GET_DIALOGS_QUERY,
            variables: {
                userId: '1',
            },
        },
        result: () => {
            return {
                data: {
                    dialogs: DialogsMockData,
                },
            };
        },
    },
    {
        request: {
            query: DIALOG_CREATED,
            variables: {
                userId: '1',
            },
        },
        result: () => {
            return {};
        },
    },
];
