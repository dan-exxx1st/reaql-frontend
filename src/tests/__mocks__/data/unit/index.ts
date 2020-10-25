import { ContactType, MessageType } from 'lib/types/components/common';
import { GenerateDate } from 'tests/helpers';

export const ContactListData: ContactType[] = [
    {
        id: '1',
        name: 'Test User 1',
        last_message: 'Last message #1',
        last_message_date: GenerateDate,
        unread_message_count: 11,
        sended_message_status: 'readed',
    },
    {
        id: '2',
        name: 'Test User 2',
        unread_message_count: 2,
        sended_message_status: 'sended',
    },
];

export const MessageItemData: MessageType = {
    id: '1',
    user_name: 'Test User',
    message_text: 'Test message',
    message_date: '10:00 AM',
};

export const MessageListData = [
    { ...MessageItemData },
    {
        id: '2',
        user_name: 'Test User 2',
        message_text: 'Test message 2',
        message_date: '10:00 PM',
    },
];
