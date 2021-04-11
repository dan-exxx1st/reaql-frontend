import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Button } from 'components/UI';
import { colorTheme } from 'helpers/styled';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<Button />', () => {
    describe('Snapshots', () => {
        it('Primary filled button without effects', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <Button variant="filled" color="primary">
                    button
                </Button>
            );
            const wrapper = firstChild;

            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveStyleRule('background', colorTheme.pc);
            expect(wrapper).toHaveStyleRule('color', colorTheme.wc);
        });

        it('Primary outlined button without effects', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <Button variant="outlined" color="primary">
                    button
                </Button>
            );
            const wrapper = firstChild;

            expect(wrapper).toHaveStyleRule('background', 'none');
            expect(wrapper).toHaveStyleRule('color', colorTheme.pc);
            expect(wrapper).toHaveStyleRule(
                'border',
                `1px solid ${colorTheme.pc}`
            );
            expect(wrapper).toMatchSnapshot();
        });

        it('Secondary filled button without effects', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <Button variant="filled" color="secondary">
                    button
                </Button>
            );
            const wrapper = firstChild;
            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveStyleRule('background', colorTheme.sc);
            expect(wrapper).toHaveStyleRule('color', colorTheme.dgc);
            expect(wrapper).toHaveStyleRule('border', 'none');
        });

        it('Secondary outlined button without effects', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <Button variant="outlined" color="secondary">
                    button
                </Button>
            );
            const wrapper = firstChild;

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
        const {
            container: { firstChild },
        } = renderWithTheme(
            <Button variant="filled" color="primary">
                Default button
            </Button>
        );
        expect(firstChild).toHaveStyleRule('background', colorTheme.pc);
        expect(firstChild?.textContent).toBe('Default button');
    });

    it('Button should use onClick event', () => {
        const mockFunction = jest.fn();
        renderWithTheme(
            <Button
                variant="filled"
                color="primary"
                onClick={mockFunction}
                className="custom-class"
            >
                Should click
            </Button>
        );
        fireEvent.click(screen.getByRole('button'));

        expect(mockFunction).toBeCalled();
    });
});
