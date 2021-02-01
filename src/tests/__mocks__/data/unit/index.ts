import { Message, Dialog_User_Roles } from 'lib/graphql/types';
import { GenerateDate } from 'tests/helpers';
import { UsersMockData } from '../users';

const updatedAt = String(new Date()),
    createdAt = String(new Date());

export const MessageItemData: Message = {
    id: '1',
    user: UsersMockData[0],
    text: 'Test message',
    messageDate: GenerateDate,
    dialog: {
        id: '1',
        group: false,
        users: [UsersMockData[0], UsersMockData[1]],
        dialogProps: [
            {
                id: '1',
                user: UsersMockData[0],
                userRole: Dialog_User_Roles.Admin,
                updatedAt,
                createdAt,
            },
            {
                id: '2',
                user: UsersMockData[1],
                userRole: Dialog_User_Roles.User,
                updatedAt,
                createdAt,
            },
        ],
        updatedAt,
        createdAt,
    },
};

export const MessageListData = [MessageItemData];
