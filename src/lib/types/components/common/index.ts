import { SendedMessage } from 'lib/types';

export type ContactType = {
    id: string;
    name: string;
    avatar_src?: string;
    last_message?: string;
    last_message_date?: string;
    unread_message_count?: number;
    message_status?: SendedMessage;
};

export type MessageType = {
    id: string;
    user_name: string;
    message_date?: any;
    message_text?: string;
    message_status?: SendedMessage;
};

export interface IUserHeaderProps {
    className?: string;
}

export interface IMessageSearchProps {
    onClick?: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

export type IMessageItemProps = MessageType;

export type IContactsItemProps = ContactType;

export interface IMessageListProps {
    messages?: IMessageItemProps[];
}

export interface IContactListProps {
    contacts?: ContactType[];
    className?: string;
}

export interface IDialogTextFieldProps {
    value?: string;
    onChange?: (value: string) => void;
}
