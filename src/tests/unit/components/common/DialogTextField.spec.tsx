import React from 'react';
import { DialogTextField } from 'components/common';
import { renderWithApollo } from 'tests/helpers/withApollo';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        search: '',
    }),
    useHistory: () => ({}),
}));

describe('<DialogTextField />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<DialogTextField />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
