import WomanAvatar from 'assets/images/WomanAvatar.png';
import { DialogType } from 'lib/types/components/common';
import { GenerateDate } from 'tests/helpers';

export const DialogItemDataWithoutAvatar: DialogType = {
    id: '1',
    name: 'Jaydon Bator',
    avatar_src: '',
    last_message: 'Hi. It appears that i lose my avatar :(',
    last_message_date: GenerateDate,
    unread_message_count: 0,
    message_status: 'sended',
};

export const DialogItemDataWithAvatar: DialogType = {
    id: '2',
    name: 'Desirae Schleifer',
    avatar_src: WomanAvatar,
    last_message: 'Hi. I`m have avatar.',
    last_message_date: GenerateDate,
    unread_message_count: 7,
    message_status: 'received',
};

export const DialogItemDataWithReadMessaage: DialogType = {
    id: '3',
    name: 'James Daniel',
    avatar_src: '',
    last_message: ':D',
    last_message_date: GenerateDate,
    unread_message_count: 0,
    message_status: 'readed',
};

export const DialogItemDataWithoutLastMessageDate: DialogType = {
    id: '4',
    name: 'James Daniel',
    avatar_src: '',
    last_message: '',
    unread_message_count: 11,
    message_status: 'readed',
};

export const DialogListData: DialogType[] = [
    DialogItemDataWithoutAvatar,
    DialogItemDataWithAvatar,
    DialogItemDataWithReadMessaage,
    DialogItemDataWithoutLastMessageDate,
];
