import React from 'react';
import { storiesOf } from '@storybook/react';
import { Circle } from 'components/UI';

storiesOf('UI/ Circle component', module).add('default', () => (
    <Circle text="3" color="primary" />
));
