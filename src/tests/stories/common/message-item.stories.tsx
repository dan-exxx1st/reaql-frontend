import React from 'react';
import { storiesOf } from '@storybook/react';
import { MessageItem } from 'components/common';

storiesOf('Common/ MessageItem', module)
    .add('default', () => <MessageItem />)
    .add('with inactive check mark', () => (
        <MessageItem sended_message_status="sended" />
    ));
