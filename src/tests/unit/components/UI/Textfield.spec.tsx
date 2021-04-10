import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { TextField } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<TextField />', () => {
    describe('Snapshots', () => {
        it('Primary text field with large size ', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="primary"
                    fieldSize="large"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
        it('Primary text field with medium size', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="primary"
                    fieldSize="medium"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
        it('Primary text field with small size ', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="primary"
                    fieldSize="small"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
        it('Secondary text field with large size', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="large"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
        it('Secondary text field with medium size', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="medium"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
        it('Secondary text field with small size', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="small"
                    value="TextField snapshot"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });

        it('Primary text field with icon', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField color="secondary" fieldSize="small" icon="search" />
            );

            expect(firstChild).toMatchSnapshot();
        });

        it('Primary text field with custom width and height', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="small"
                    width="25px"
                    height="25px"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
    });

    it('Should change value in text field', () => {
        let wrapperValue = 'Initial value';
        const changedValue = 'Changed value';
        const changeValue = (value: string) => {
            wrapperValue = value;
        };

        renderWithTheme(
            <TextField
                color="primary"
                fieldSize="small"
                onChange={changeValue}
                value={wrapperValue}
            />
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: {
                value: changedValue,
            },
        });

        expect(wrapperValue).toBe(changedValue);
    });
});
