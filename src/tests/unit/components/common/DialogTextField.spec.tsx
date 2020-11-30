import React from 'react';
import { DialogTextField } from 'components/common';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<DialogTextField />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<DialogTextField />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
