import React from 'react';
import { Circle } from 'components/UI';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<Circle />', () => {
    describe('Snapshots', () => {
        it('Should render circle with primary color', () => {
            const wrapper = mountWithTheme(<Circle color="primary">C</Circle>);

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render circle with secondary color', () => {
            const wrapper = mountWithTheme(
                <Circle color="secondary">C</Circle>
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render circle with icon', () => {
            const wrapper = mountWithTheme(
                <Circle color="secondary" iconName="search" />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
