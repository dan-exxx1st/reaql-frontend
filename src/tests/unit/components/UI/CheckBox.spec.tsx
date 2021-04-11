import React from 'react';
import CheckBox from 'components/UI/CheckBox';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<CheckBox />', () => {
    it('Check box should render correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(<CheckBox />);
        expect(firstChild).toMatchSnapshot();
    });

    it('Check box with text should render correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(<CheckBox text="Test text" />);
        expect(firstChild).toMatchSnapshot();
    });
});
