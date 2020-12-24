import WomanAvatar from 'assets/images/WomanAvatar.png';
import { Message_Statuses } from 'lib/graphql/types';
import { IDialogsItemProps } from 'lib/types/components/common';
import { GenerateDate } from 'tests/helpers';

export const DialogItemDataWithoutAvatar: IDialogsItemProps = {
    id: '1',
    name: 'Jaydon',
    surname: 'Bator',
    avatar: '',
    lastMessage: 'Hi. It appears that i lose my avatar :(',
    lastMessageDate: GenerateDate,
    unreadMessages: 0,
    lastMessageStatus: Message_Statuses.Sended,
};

export const DialogItemDataWithAvatar: IDialogsItemProps = {
    id: '2',
    name: 'Desirae',
    surname: 'Schleifer',
    avatar: WomanAvatar,
    lastMessage: 'Hi. I`m have avatar.',
    lastMessageDate: GenerateDate,
    unreadMessages: 7,
    lastMessageStatus: Message_Statuses.Recived,
};

export const DialogItemDataWithReadMessaage: IDialogsItemProps = {
    id: '3',
    name: 'James',
    surname: 'Daniel',
    avatar: '',
    lastMessage: ':D',
    lastMessageDate: GenerateDate,
    unreadMessages: 0,
    lastMessageStatus: Message_Statuses.Readed,
};

export const DialogItemDataWithoutLastMessageDate: IDialogsItemProps = {
    id: '4',
    name: 'James',
    surname: 'Daniel',
    avatar: '',
    lastMessage: '',
    unreadMessages: 11,
    lastMessageStatus: Message_Statuses.Readed,
    lastMessageDate: '21.12.2020',
};

export const DialogListData: IDialogsItemProps[] = [
    DialogItemDataWithoutAvatar,
    DialogItemDataWithAvatar,
    DialogItemDataWithReadMessaage,
    DialogItemDataWithoutLastMessageDate,
];
