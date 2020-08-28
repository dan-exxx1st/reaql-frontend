import React from 'react';
import moment from 'moment';
import WomanAvatar from 'assets/images/WomanAvatar.png';
import DialogListItem from '.';
import { Wrapper } from 'components/UI';

export default {
	title: 'Dialog list item',
};

const currentDate = moment('13:50', 'hh:mm').format('HH:mm');

const DialogListDataWithoutAvatar: NDialogListItem.IProps = {
	id: '1',
	name: 'Jaydon Bator',
	avatar_src: '',
	last_message: 'Hi. It appears that i lose my avatar :(',
	last_message_date: currentDate,
	unread_message_count: 3,
	sended_message_status: 'sended',
};

const DialogListDataWithAvatar: NDialogListItem.IProps = {
	id: '2',
	name: 'Desirae Schleifer',
	avatar_src: WomanAvatar,
	last_message: 'Hi. I`m have avatar.',
	last_message_date: currentDate,
	unread_message_count: 0,
	sended_message_status: 'sended',
};

const DialogListDataWithReadMessaage: NDialogListItem.IProps = {
	id: '3',
	name: 'James Daniel',
	avatar_src: '',
	last_message: ':D',
	last_message_date: currentDate,
	unread_message_count: 0,
	sended_message_status: 'readed',
};

export const DefaultDialogListItem = () => (
	<Wrapper flexDirection="column">
		<DialogListItem {...DialogListDataWithoutAvatar} />
		<DialogListItem {...DialogListDataWithAvatar} />
		<DialogListItem {...DialogListDataWithReadMessaage} />
	</Wrapper>
);
