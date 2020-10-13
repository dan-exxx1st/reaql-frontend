import moment from 'moment';
import WomanAvatar from 'assets/images/WomanAvatar.png';

const currentDate = moment('13:50', 'hh:mm').format('HH:mm');

export const ContactItemDataWithoutAvatar: NContactItem.IProps = {
    id: '1',
    name: 'Jaydon Bator',
    avatar_src: '',
    last_message: 'Hi. It appears that i lose my avatar :(',
    last_message_date: currentDate,
    unread_message_count: 3,
    sended_message_status: 'sended',
};

export const ContactItemDataWithAvatar: NContactItem.IProps = {
    id: '2',
    name: 'Desirae Schleifer',
    avatar_src: WomanAvatar,
    last_message: 'Hi. I`m have avatar.',
    last_message_date: currentDate,
    unread_message_count: 0,
    sended_message_status: 'received',
};

export const ContactItemDataWithReadMessaage: NContactItem.IProps = {
    id: '3',
    name: 'James Daniel',
    avatar_src: '',
    last_message: ':D',
    last_message_date: currentDate,
    unread_message_count: 11,
    sended_message_status: 'readed',
};

export const ContactItemDataWithoutLastMessageDate: NContactItem.IProps = {
    id: '3',
    name: 'James Daniel',
    avatar_src: '',
    last_message: '',
    unread_message_count: 11,
    sended_message_status: 'readed',
};
