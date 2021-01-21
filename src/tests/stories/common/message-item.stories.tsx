import React from 'react';
import { storiesOf } from '@storybook/react';
import { MessageItem } from 'components/common';
import { MessageItemData } from 'tests/__mocks__/data/unit';

storiesOf('Common/ Message item', module).add('default', () => (
    <MessageItem {...MessageItemData} />
));
// .add('with sended message status', () => (
//     <MessageItem message_status="sended" {...MessageItemData} />
// ))
// .add('with readed message status', () => (
//     <MessageItem message_status="readed" {...MessageItemData} />
// ));
