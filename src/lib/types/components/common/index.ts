import Theme from 'helpers/styled';
import { Dialog, Maybe, Message, Message_Statuses } from 'lib/graphql/types';
import { ISideBarWithDataProps } from '../data';

export interface IUserHeaderProps {
    className?: string;
    setSearchUserOpened?: (val: boolean) => void;
}

export interface IMessageSearchProps {
    onClick?: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

export interface IMessageItemProps extends Message {
    className?: string;
}

export interface IDialogsItemProps {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    unreadMessages: number | null | undefined;
    lastMessageStatus: Message_Statuses | null | undefined;
    lastMessage: string | null | undefined;
    lastMessageDate: string | null | undefined;
}

export interface IMessageListProps {
    data?: {
        messages: Message[];
    };
    loading?: boolean;
    subscribeToNewMessages?: () => void;
    className?: string;
}

export interface IDialogListProps {
    dialogFilter: string;
    dialogs?: Maybe<Dialog[]>;
    className?: string;
}

export interface IDialogTextFieldProps {
    className?: string;
}

export interface IDialogHeaderProps {
    className?: string;
    dialogId: string;
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

export interface ISideBarProps extends ISideBarWithDataProps {
    data?: {
        dialogs: Dialog[];
    };
    loading: boolean;
    subscribeToNewDialogs?: () => void;
}
