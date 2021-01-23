import React from 'react';
import DialogList from 'components/common/DialogList';
import { storiesOf } from '@storybook/react';
import { DialogsMockData } from 'tests/__mocks__/data/graphql';

storiesOf('Common/ Dialog list', module).add('default', () => (
    <DialogList dialogs={DialogsMockData} dialogFilter="" />
));
