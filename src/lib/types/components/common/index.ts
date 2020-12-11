import { SendedMessage } from 'lib/types';
import Theme from 'helpers/styled';

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
    setSearchUserOpened?: (val: boolean) => void;
}

export interface IMessageSearchProps {
    onClick?: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

export interface IMessageItemProps extends MessageType {
    className?: string;
}

export type IContactsItemProps = ContactType;

export interface IMessageListProps {
    messages?: IMessageItemProps[];
    className?: string;
}

export interface IContactListProps {
    contacts?: ContactType[];
    className?: string;
}

export interface IDialogTextFieldProps {
    className?: string;
}

export interface IDialogHeaderProps {
    className?: string;
}

export interface ISignUpFormProps {
    email: string;
    name: string;
    surname: string;
    password: string;
    changeFormValues: (field: string, value: string) => void;
    handleSubmit: () => void;
    theme?: typeof Theme;
}

export interface ISignInFormProps {
    _handleSignIn: (payload: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => void;
}
