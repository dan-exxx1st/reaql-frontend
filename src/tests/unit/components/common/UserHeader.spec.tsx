import React from 'react';
import { UserHeader } from 'components/common';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<UserHeader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<UserHeader />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
