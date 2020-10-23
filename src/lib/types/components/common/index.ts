import { SendedMessage } from 'lib/types';

export interface IUserHeaderProps {
    className?: string;
}

export interface IMessageSearchProps {
    onClick?: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

export interface IMessageItemProps {
    sended_message_status?: SendedMessage;
}

export interface IContactsItemProps {
    id: string;
    name: string;
    avatar_src?: string;
    last_message?: string;
    last_message_date?: string;
    unread_message_count?: number;
    sended_message_status?: SendedMessage;
}
