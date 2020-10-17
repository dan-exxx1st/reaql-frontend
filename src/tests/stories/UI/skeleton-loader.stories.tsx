import React from 'react';
import { storiesOf } from '@storybook/react';
import { SkeletonLoader } from 'components/UI';

storiesOf('UI/ Skeleton loader', module)
    .add('avatar', () => <SkeletonLoader variant="avatar" />)
    .add('block', () => <SkeletonLoader variant="block" />);
