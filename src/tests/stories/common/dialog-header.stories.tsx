import React from 'react';
import { storiesOf } from '@storybook/react';
import { DialogHeader } from 'components/common';

storiesOf('Common/ Dialog header', module).add('default', () => (
    <DialogHeader name="Test User" />
));
