import React from 'react';
import { TextField } from 'components/UI';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

describe('<TextField />', () => {
    describe('Snapshots', () => {
        it('Primary text field with large size ', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="primary"
                    fieldSize="large"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('Primary text field with medium size', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="primary"
                    fieldSize="medium"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('Primary text field with small size ', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="primary"
                    fieldSize="small"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('Secondary text field with large size', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="large"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('Secondary text field with medium size', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="medium"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('Secondary text field with small size', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="small"
                    value="TextField snapshot"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });

        it('Primary text field with icon', () => {
            const wrapper = mountWithTheme(
                <TextField color="secondary" fieldSize="small" icon="search" />
            );
            expect(wrapper).toMatchSnapshot();
        });

        it('Primary text field with custom width and height', () => {
            const wrapper = mountWithTheme(
                <TextField
                    color="secondary"
                    fieldSize="small"
                    width="25px"
                    height="25px"
                />
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should change value in text field', () => {
        let wrapperValue = 'Initial value';
        const changeValue = (value: string) => {
            wrapperValue = value;
        };

        const wrapper = shallowWithTheme(
            <TextField
                color="primary"
                fieldSize="small"
                onChange={changeValue}
                value={wrapperValue}
            />
        );

        wrapper.dive().find('TextField').simulate('change', 'Changed value');
        expect(wrapperValue).toEqual('Changed value');
    });

    it('Should called change event', () => {
        const changeEvent = jest.fn();

        const wrapper = shallowWithTheme(
            <TextField
                color="primary"
                fieldSize="small"
                onChange={changeEvent}
            />
        );

        wrapper.dive().find('TextField').simulate('change');
        expect(changeEvent).toBeCalledTimes(1);
    });
});
