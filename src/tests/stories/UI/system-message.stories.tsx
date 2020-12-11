import React from 'react';
import { storiesOf } from '@storybook/react';

import { SystemMessage } from 'components/UI';

storiesOf('UI/ System message', module)
    .add('success', () => (
        <SystemMessage variant="success">Success message</SystemMessage>
    ))
    .add('error', () => (
        <SystemMessage variant="error">Error message</SystemMessage>
    ))
    .add('warning', () => (
        <SystemMessage variant="warning">Warning message</SystemMessage>
    ))
    .add('info', () => (
        <SystemMessage variant="info">Info message</SystemMessage>
    ));
