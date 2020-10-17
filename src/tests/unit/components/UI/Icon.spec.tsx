import React from 'react';
import { mountWithTheme } from 'tests/helpers/withTheme';

import { Icon } from 'components/UI';

describe('<Icon />', () => {
    describe('Snapshots', () => {
        it('Should render person icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="person" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render animal icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="animal" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render food icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="food" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render people icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="people" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render search icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="search" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render newChat icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="newChat" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render threeDotsWhite icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="threeDotsWhite" />);
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render threeDotsGrey icon', () => {
            const wrapper = mountWithTheme(<Icon iconName="threeDotsGrey" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
