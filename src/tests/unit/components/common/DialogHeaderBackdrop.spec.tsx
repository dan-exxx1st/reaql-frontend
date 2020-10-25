import React from 'react';
import { DialogHeaderBackdrop } from 'components/common';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<DialogHeaderBackdrop />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<DialogHeaderBackdrop />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
