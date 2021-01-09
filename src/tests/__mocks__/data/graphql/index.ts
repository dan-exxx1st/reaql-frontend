import { Dialog, DialogProps, Dialog_User_Roles } from 'lib/graphql/types';
import { UsersMockData } from '../users';

export const DialogPropsMockData: DialogProps[] = [
    {
        __typename: 'DialogProps',
        id: '1',
        user: UsersMockData[0],
        userRole: Dialog_User_Roles.Admin,
        unreadMessages: 0,
        lastMessageStatus: null,
    },
    {
        __typename: 'DialogProps',
        id: '2',
        user: UsersMockData[1],
        userRole: Dialog_User_Roles.User,
        unreadMessages: 0,
        lastMessageStatus: null,
    },
    {
        __typename: 'DialogProps',
        id: '3',
        user: UsersMockData[2],
        userRole: Dialog_User_Roles.Admin,
        unreadMessages: 0,
        lastMessageStatus: null,
    },
    {
        __typename: 'DialogProps',
        id: '4',
        user: UsersMockData[3],
        userRole: Dialog_User_Roles.User,
        unreadMessages: 0,
        lastMessageStatus: null,
    },
];

export const DialogsMockData: Dialog[] = [
    {
        __typename: 'Dialog',
        id: '1',
        lastMessage: 'test',
        lastMessageDate: '21.01.2020',
        users: [UsersMockData[0], UsersMockData[1]],
        dialogProps: [DialogPropsMockData[0], DialogPropsMockData[1]],
        group: false,
    },
    {
        __typename: 'Dialog',
        id: '2',
        users: [UsersMockData[2], UsersMockData[3]],
        dialogProps: [DialogPropsMockData[2], DialogPropsMockData[3]],
        group: false,
        lastMessage: 'Test last message',
        lastMessageDate: String(new Date()),
    },
];
