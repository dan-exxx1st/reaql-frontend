import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckMark } from 'components/UI';

storiesOf('UI/ Check marks', module)
    .add('checked', () => <CheckMark isDouble={false} isChecked={true} />)
    .add('unchecked', () => <CheckMark isDouble={false} isChecked={false} />);
