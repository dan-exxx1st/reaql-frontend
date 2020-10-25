import React from 'react';
import { CheckMark } from 'components/UI';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<CheckMark />', () => {
    describe('Snapshots', () => {
        it('Should render with inactive marks and isDouble', () => {
            const wrapper = mountWithTheme(
                <CheckMark isChecked={false} isDouble={true} />
            );

            expect(wrapper).toHaveStyleRule('fill', '#A5A5A5');
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render with active marks and isDouble', () => {
            const wrapper = mountWithTheme(
                <CheckMark isChecked={true} isDouble={true} />
            );
            expect(wrapper).toHaveStyleRule('fill', '#00ADFF');
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render with inactive marks', () => {
            const wrapper = mountWithTheme(
                <CheckMark isChecked={false} isDouble={false} />
            );
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render with active marks', () => {
            const wrapper = mountWithTheme(
                <CheckMark isChecked={true} isDouble={false} />
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
});
