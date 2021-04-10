import React from 'react';
import { CheckMark } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<CheckMark />', () => {
    describe('Snapshots', () => {
        it('Should render with inactive marks and isDouble', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <CheckMark isChecked={false} isDouble={true} />
            );
            const wrapper = firstChild;

            expect(wrapper).toHaveStyleRule('fill', '#A5A5A5');
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render with active marks and isDouble', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<CheckMark isChecked={true} isDouble={true} />);
            const wrapper = firstChild;

            expect(wrapper).toHaveStyleRule('fill', '#00ADFF');
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render with inactive marks', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <CheckMark isChecked={false} isDouble={false} />
            );

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render with active marks', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(
                <CheckMark isChecked={true} isDouble={false} />
            );

            expect(firstChild).toMatchSnapshot();
        });
    });
});
