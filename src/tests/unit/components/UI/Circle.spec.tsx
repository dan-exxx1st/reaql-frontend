import React from 'react';
import { Circle } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<Circle />', () => {
    describe('Snapshots', () => {
        it('Should render circle with a primary color correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="primary">C</Circle>);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render circle with a secondary color correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="secondary">C</Circle>);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render circle with an icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="secondary" iconName="search" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render circle with a text correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Circle color="secondary" text="Test text" />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
