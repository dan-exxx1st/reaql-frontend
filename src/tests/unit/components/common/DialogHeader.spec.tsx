import React from 'react';
import { DialogHeader } from 'components/common';
import {
    mountWithApolloAndStyled,
    shallowWithApolloAndStyled,
} from 'tests/helpers/withApollo';

describe('<DialogHeader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<DialogHeader />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should click to the circle', () => {
        const wrapper = shallowWithApolloAndStyled(<DialogHeader />);
        const diveWrapper = wrapper.dive().dive().dive().dive();

        diveWrapper.find('Styled(Circle)').first().simulate('click');

        expect(diveWrapper.find('MessageSearch')).toHaveLength(1);
    });
});
