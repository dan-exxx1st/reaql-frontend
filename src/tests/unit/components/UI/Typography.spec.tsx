import React from 'react';
import { screen } from '@testing-library/react';
import { Typography } from 'components/UI';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<Typography />', () => {
    it('Typography variant body-2', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(<Typography variant="body2">Body 2</Typography>);
        expect(firstChild).toMatchSnapshot();
    });

    it('should render passed text', () => {
        const bodyTwoText = 'Body 2 text';
        renderWithTheme(<Typography variant="body2">{bodyTwoText}</Typography>);

        expect(screen.getByText(bodyTwoText).firstChild?.textContent).toBe(
            bodyTwoText
        );
    });
});
