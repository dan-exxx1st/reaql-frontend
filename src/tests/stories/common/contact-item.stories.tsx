import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContactItem } from 'components/common';
import { Wrapper } from 'components/UI';
import {
    ContactItemDataWithAvatar,
    ContactItemDataWithoutAvatar,
    ContactItemDataWithReadMessaage,
} from 'tests/__mocks__/data/unit/ContactItem';

storiesOf('Common/ ContactItem', module).add('default', () => (
    <Wrapper flexDirection="column">
        <ContactItem {...ContactItemDataWithAvatar} />
        <ContactItem {...ContactItemDataWithoutAvatar} />
        <ContactItem {...ContactItemDataWithReadMessaage} />
    </Wrapper>
));
