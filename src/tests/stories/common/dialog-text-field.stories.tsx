import React from 'react';

import { storiesOf } from '@storybook/react';
import { DialogTextField } from 'components/common';

storiesOf('Common/ Dialog text field', module).add('default', () => {
    return <DialogTextField />;
});
