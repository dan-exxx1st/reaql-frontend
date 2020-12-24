import React from 'react';
import { DialogTextField } from 'components/common';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

describe('<DialogTextField />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<DialogTextField />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
