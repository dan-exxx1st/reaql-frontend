import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MessageSearch } from 'components/common';

storiesOf('Common/ Message search', module).add('default', () => {
    const [textValue, setTextValue] = useState('');

    return <MessageSearch value={textValue} onChange={setTextValue} />;
});
