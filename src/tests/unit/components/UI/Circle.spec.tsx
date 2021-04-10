import React from 'react';
import { Circle } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<Circle />', () => {
    describe('Snapshots', () => {
        it('Should render circle with primary color', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="primary">C</Circle>);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render circle with secondary color', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="secondary">C</Circle>);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render circle with icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="secondary" iconName="search" />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
