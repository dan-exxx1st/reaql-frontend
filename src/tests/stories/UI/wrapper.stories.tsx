import React from 'react';
import { storiesOf } from '@storybook/react';
import { Wrapper } from 'components/UI';

storiesOf('UI/ Wrapper', module).add('default', () => (
    <Wrapper flexDirection="column">Default wrapper</Wrapper>
));
