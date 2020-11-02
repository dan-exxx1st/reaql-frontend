import React from 'react';

import { mountWithTheme } from 'tests/helpers/withTheme';

import { ContactList } from 'components/common';
import { ContactListData } from 'tests/__mocks__/data/unit/ContactItem';

describe('<ContactList />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(
                <ContactList contacts={ContactListData} />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
