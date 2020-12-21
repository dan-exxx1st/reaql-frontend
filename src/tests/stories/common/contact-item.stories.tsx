import React from 'react';
import { storiesOf } from '@storybook/react';
import { DialogItem } from 'components/common';
import { Wrapper } from 'components/UI';
import {
    DialogItemDataWithAvatar,
    DialogItemDataWithoutAvatar,
    DialogItemDataWithReadMessaage,
} from 'tests/__mocks__/data/unit/DialogItem';

storiesOf('Common/ Dialog item', module).add('default', () => (
    <Wrapper flexDirection="column">
        <DialogItem {...DialogItemDataWithAvatar} />
        <DialogItem {...DialogItemDataWithoutAvatar} />
        <DialogItem {...DialogItemDataWithReadMessaage} />
    </Wrapper>
));
