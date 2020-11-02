import { MessageType } from 'lib/types/components/common';
import { GenerateDate } from 'tests/helpers';

export const MessageItemData: MessageType = {
    id: '1',
    user_name: 'Test User',
    message_text: 'Test message',
    message_date: GenerateDate,
};

export const MessageListData = [
    { ...MessageItemData },
    {
        id: '2',
        user_name: 'Test User 2',
        message_text: 'Test message 2',
        message_date: GenerateDate,
    },
];
