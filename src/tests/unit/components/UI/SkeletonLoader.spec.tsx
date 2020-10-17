import React from 'react';
import { SkeletonLoader } from 'components/UI';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<SkeletonLoader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly for avatar with default settings', () => {
            const wrapper = mountWithTheme(<SkeletonLoader variant="avatar" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly for block with default settings', () => {
            const wrapper = mountWithTheme(<SkeletonLoader variant="block" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly for avatar with custom settings', () => {
            const wrapper = mountWithTheme(
                <SkeletonLoader variant="avatar" width="30px" height="30px" />
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly for block with default settings', () => {
            const wrapper = mountWithTheme(
                <SkeletonLoader variant="block" width="30px" height="30px" />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
