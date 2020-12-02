import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CheckBox } from 'components/UI';

storiesOf('UI/ Check box', module)
    .add('default', () => {
        const [value, setValue] = useState(false);

        const changeValue = () => setValue(!value);

        return <CheckBox onClick={changeValue} />;
    })
    .add('with text', () => <CheckBox text="Some text for check box" />);
