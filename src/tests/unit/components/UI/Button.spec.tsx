import React from 'react';
import { Button } from 'components/UI';
import { colorTheme } from 'config/styled';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<Button />', () => {
    describe('Snapshots', () => {
        it('Primary filled button without effects', () => {
            const wrapper = mountWithTheme(
                <Button variant="filled" color="primary">
                    button
                </Button>
            );
            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveStyleRule('background', colorTheme.pc);
            expect(wrapper).toHaveStyleRule('color', colorTheme.wc);
        });

        it('Primary outlined button without effects', () => {
            const wrapper = mountWithTheme(
                <Button variant="outlined" color="primary">
                    button
                </Button>
            );
            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveStyleRule('background', 'none');
            expect(wrapper).toHaveStyleRule('color', colorTheme.pc);
            expect(wrapper).toHaveStyleRule(
                'border',
                `1px solid ${colorTheme.pc}`
            );
        });

        it('Secondary filled button without effects', () => {
            const wrapper = mountWithTheme(
                <Button variant="filled" color="secondary">
                    button
                </Button>
            );
            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveStyleRule('background', colorTheme.sc);
            expect(wrapper).toHaveStyleRule('color', colorTheme.dgc);
            expect(wrapper).toHaveStyleRule('border', 'none');
        });

        it('Secondary outlined button without effects', () => {
            const wrapper = mountWithTheme(
                <Button variant="outlined" color="secondary">
                    button
                </Button>
            );

            expect(wrapper).toHaveStyleRule('background', 'none');
            expect(wrapper).toHaveStyleRule(
                'border',
                `1px solid ${colorTheme.sc}`
            );
            expect(wrapper).toHaveStyleRule('color', colorTheme.dgc);
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Button should render text which passed to props', () => {
        const wrapper = mountWithTheme(
            <Button variant="filled" color="primary">
                Default button
            </Button>
        );
        expect(wrapper).toHaveStyleRule('background', colorTheme.pc);
    });

    it('Button should use onClick event', () => {
        const mockFunction = jest.fn();
        const wrapper = mountWithTheme(
            <Button
                variant="filled"
                color="primary"
                onClick={mockFunction}
                className="custom-class"
            >
                Should click
            </Button>
        );
        wrapper.simulate('click');
        expect(mockFunction).toBeCalled();
    });
});
