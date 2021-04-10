import React from 'react';
import { renderWithTheme } from 'tests/helpers/withTheme';

import { Icon } from 'components/UI';

describe('<Icon />', () => {
    describe('Snapshots', () => {
        it('Should render person icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="person" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render animal icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="animal" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render food icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="food" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render people icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="people" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render search icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="search" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render newChat icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="newChat" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render threeDotsWhite icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="threeDotsWhite" />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render threeDotsGrey icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Icon iconName="threeDotsGrey" />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
