import React from 'react';
import SystemMessage from 'components/UI/SystemMessage';
import { renderWithTheme } from 'tests/helpers/withTheme';

describe('<SystemMessage />', () => {
    it('Should render a success message correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(
            <SystemMessage variant="success" className="test-class">
                Test msg
            </SystemMessage>
        );
        expect(firstChild).toMatchSnapshot();
    });

    it('Should render an error message correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(
            <SystemMessage variant="error">Test msg</SystemMessage>
        );
        expect(firstChild).toMatchSnapshot();
    });

    it('Should render a warning message correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(
            <SystemMessage variant="warning">Test msg</SystemMessage>
        );
        expect(firstChild).toMatchSnapshot();
    });

    it('Should render an info message correctly', () => {
        const {
            container: { firstChild },
        } = renderWithTheme(
            <SystemMessage variant="info">Test msg</SystemMessage>
        );
        expect(firstChild).toMatchSnapshot();
    });
});
