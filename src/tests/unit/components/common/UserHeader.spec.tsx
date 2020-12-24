import React from 'react';
import { UserHeader } from 'components/common';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

describe('<UserHeader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<UserHeader />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
