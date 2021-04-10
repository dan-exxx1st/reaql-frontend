import React from 'react';
import { renderWithTheme } from 'tests/helpers/withTheme';
import { Wrapper } from 'components/UI';

describe('<Wrapper />', () => {
    describe('Snapshots', () => {
        it('Should render a wrapper correctly with default styles', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Wrapper>Correctly wraper</Wrapper>);
            expect(firstChild).toMatchSnapshot();
        });
    });

    it('Should have a correctly style rules', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(
            <Wrapper
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                margin="5px"
                padding="15px"
            >
                Correctly wraper
            </Wrapper>
        );
        const wrapper = firstChild;

        expect(wrapper).toHaveStyleRule('margin', '5px');
        expect(wrapper).toHaveStyleRule('padding', '15px');
        expect(wrapper).toHaveStyleRule('flex-direction', 'column');
        expect(wrapper).toHaveStyleRule('justify-content', 'center');
    });

    it('Should have a correctly default style rules', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(<Wrapper>Correctly wraper</Wrapper>);
        const wrapper = firstChild;

        expect(wrapper).toHaveStyleRule('flex-direction', 'row');
        expect(wrapper).toHaveStyleRule('justify-content', 'flex-start');
        expect(wrapper).toHaveStyleRule('align-content', 'flex-start');
        expect(wrapper).toHaveStyleRule('align-items', 'flex-start');
    });
});
