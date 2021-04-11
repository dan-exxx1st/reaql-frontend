import React from 'react';
import { renderWithTheme } from 'tests/helpers/withTheme';

import { Icon } from 'components/UI';

describe('<Icon />', () => {
    describe('Snapshots', () => {
        it('Should render a person icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="person" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render an animal icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="animal" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a food icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="food" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a people icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="people" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a search icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="search" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a newChat icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="newChat" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a threeDotsWhite icon  correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="threeDotsWhite" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a threeDotsGrey icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="threeDotsGrey" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render a bluePlus icon correctly', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="bluePlus" />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
