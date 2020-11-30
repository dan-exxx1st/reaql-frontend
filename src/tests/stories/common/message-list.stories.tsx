import React from 'react';
import { storiesOf } from '@storybook/react';
import { MessageList } from 'components/common';
import { MessageListData } from 'tests/__mocks__/data/unit';

storiesOf('Common/ Message list', module).add('default', () => (
    <MessageList messages={MessageListData} />
));
