import React from 'react';
import { MessageSearch } from 'components/common';
import {
    mountWithApolloAndStyled,
    shallowWithApolloAndStyled,
} from 'tests/helpers/withApollo';

describe('<MessageSearch />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(<MessageSearch />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should use onClick event', () => {
        const onClickEvent = jest.fn();
        const wrapper = shallowWithApolloAndStyled(
            <MessageSearch onClick={onClickEvent} />
        );

        wrapper
            .dive()
            .dive()
            .dive()
            .dive()
            .dive()
            .dive()
            .find('Styled(Styled(Button))')
            .simulate('click');

        expect(onClickEvent).toHaveBeenCalledTimes(1);
    });
});
