import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from 'components/UI';

storiesOf('UI/ Avatar', module)
    .add('with default image', () => <Avatar alt="Ivan Markov" />)
    .add('with custom image', () => (
        <Avatar
            src="https://www.thespruce.com/thmb/wgUT9rFyV6H6dREu2ErfcacebgU=/2048x1722/filters:fill(auto,1)/House_Sparrow_England_-_May_09-5c5d2da4c9e77c0001662023.jpg"
            alt="Ivan Markov"
        />
    ));
