import React from 'react';
import DialogListItem from '../../components/DialogListItem';
import { Wrapper } from 'components/UI';
import {
    DialogListDataWithAvatar,
    DialogListDataWithoutAvatar,
    DialogListDataWithReadMessaage,
} from 'tests/__mocks__/data/unit/DialogListItem';

export default {
    title: 'Dialog list item',
};

export const DefaultDialogListItem = () => (
    <Wrapper flexDirection="column">
        <DialogListItem {...DialogListDataWithoutAvatar} />
        <DialogListItem {...DialogListDataWithAvatar} />
        <DialogListItem {...DialogListDataWithReadMessaage} />
    </Wrapper>
);
