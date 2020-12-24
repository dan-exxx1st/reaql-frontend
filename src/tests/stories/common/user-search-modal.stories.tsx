import React from 'react';
import { storiesOf } from '@storybook/react';

import { UserSearchModal } from 'components/common';

storiesOf('Common/ User search modal', module).add('default', () => {
    return <UserSearchModal />;
});
