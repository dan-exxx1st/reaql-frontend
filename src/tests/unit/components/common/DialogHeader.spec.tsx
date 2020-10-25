import React from 'react';
import { DialogHeader } from 'components/common';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

describe('<DialogHeader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<DialogHeader />);

            expect(wrapper).toMatchSnapshot();
        });

        it('Should click to the circle', () => {
            const wrapper = shallowWithTheme(<DialogHeader />);

            wrapper
                .dive()
                .dive()
                .dive()
                .find('Styled(Circle)')
                .first()
                .simulate('click');

            expect(wrapper.dive().dive().dive()).toMatchSnapshot();
        });
    });
});
