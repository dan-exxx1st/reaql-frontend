import React from 'react';
import ContactList from 'components/common/ContactList';
import { storiesOf } from '@storybook/react';
import { ContactListData } from 'tests/__mocks__/data/unit/ContactItem';

storiesOf('Common/ Contact list', module).add('default', () => (
    <ContactList contacts={ContactListData} />
));
