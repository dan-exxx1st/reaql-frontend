import React from 'react';
import { DialogHeaderBackdrop } from 'components/common';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

describe('<DialogHeaderBackdrop />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<DialogHeaderBackdrop />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
