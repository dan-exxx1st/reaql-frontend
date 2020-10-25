import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { DialogTextField } from 'components/common';

storiesOf('Common/ Dialog text field', module).add('default', () => {
    const [textValue, setTextValue] = useState('');
    return <DialogTextField value={textValue} onChange={setTextValue} />;
});
