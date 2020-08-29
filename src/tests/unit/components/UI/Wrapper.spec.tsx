import React from 'react';
import { shallowWithTheme, mountWithTheme } from 'tests/helpers/withTheme';
import { Wrapper } from 'components/UI';

describe('<Wrapper />', () => {
    describe('Snapshots', () => {
        it('Should render a wrapper correctly with default styles', () => {
            const wrapper = shallowWithTheme(
                <Wrapper>Correctly wraper</Wrapper>
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should have a correctly style rules', () => {
        const wrapper = mountWithTheme(
            <Wrapper
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                margin="5px"
            >
                Correctly wraper
            </Wrapper>
        );

        expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    });

    it('Should have a correctly default style rules', () => {
        const wrapper = mountWithTheme(<Wrapper>Correctly wraper</Wrapper>);

        expect(wrapper).toHaveStyleRule('flex-direction', 'row');
        expect(wrapper).toHaveStyleRule('justify-content', 'flex-start');
        expect(wrapper).toHaveStyleRule('align-content', 'flex-start');
        expect(wrapper).toHaveStyleRule('align-items', 'flex-start');
    });
});
