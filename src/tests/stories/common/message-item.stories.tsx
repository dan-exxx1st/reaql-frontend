import React from 'react';
import { storiesOf } from '@storybook/react';
import { MessageItem } from 'components/common';

storiesOf('Common/ Message item', module)
    .add('default', () => <MessageItem />)
    .add('with sended message status', () => (
        <MessageItem sended_message_status="sended" />
    ))
    .add('with readed message status', () => (
        <MessageItem sended_message_status="readed" />
    ));
