import { DIALOGS } from 'lib/graphql/queries/dialog';
import { DIALOG_CREATED } from 'lib/graphql/subscriptions/dialog';
import { DialogsMockData } from '../data/graphql';

export const DialogsMock = [
    {
        request: {
            query: DIALOGS,
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
