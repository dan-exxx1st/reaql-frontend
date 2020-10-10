import React from 'react';
import { storiesOf } from '@storybook/react';
import { DialogListItem } from 'components/common';
import { Wrapper } from 'components/UI';
import {
    DialogListDataWithAvatar,
    DialogListDataWithoutAvatar,
    DialogListDataWithReadMessaage,
} from 'tests/__mocks__/data/unit/DialogListItem';

storiesOf('Common/ DialogListItem', module).add('default', () => (
    <Wrapper flexDirection="column">
        <DialogListItem {...DialogListDataWithoutAvatar} />
        <DialogListItem {...DialogListDataWithAvatar} />
        <DialogListItem {...DialogListDataWithReadMessaage} />
    </Wrapper>
));
