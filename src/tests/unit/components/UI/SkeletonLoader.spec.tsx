import React from 'react';
import { SkeletonLoader } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<SkeletonLoader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly for avatar with default settings', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<SkeletonLoader variant="avatar" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly for block with default settings', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<SkeletonLoader variant="block" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly for avatar with custom settings', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <SkeletonLoader variant="avatar" width="30px" height="30px" />
            );

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly for block with default settings', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <SkeletonLoader variant="block" width="30px" height="30px" />
            );

            expect(firstChild).toMatchSnapshot();
        });
    });
});
