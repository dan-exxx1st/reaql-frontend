import React from 'react';
import { DialogTextField } from 'components/common';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        search: '',
    }),
    useHistory: () => ({}),
}));

describe('<DialogTextField />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<DialogTextField />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
