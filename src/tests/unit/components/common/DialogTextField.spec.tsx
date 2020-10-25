import React from 'react';
import { DialogTextField } from 'components/common';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

describe('<DialogTextField />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<DialogTextField />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should use onChange event', () => {
        let wrapperValue = 'Initial value';
        const changeValue = (value: string) => {
            wrapperValue = value;
        };

        const wrapper = shallowWithTheme(
            <DialogTextField onChange={changeValue} value={wrapperValue} />
        );

        wrapper
            .dive()
            .dive()
            .dive()
            .find('Styled(TextField)')
            .simulate('change', 'Changed value');

        expect(wrapperValue).toEqual('Changed value');
    });
});
