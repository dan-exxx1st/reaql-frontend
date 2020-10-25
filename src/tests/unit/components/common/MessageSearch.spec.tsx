import React from 'react';
import { MessageSearch } from 'components/common';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

describe('<MessageSearch />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(<MessageSearch />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should use onClick event', () => {
        const onClickEvent = jest.fn();
        const wrapper = shallowWithTheme(
            <MessageSearch onClick={onClickEvent} />
        );

        wrapper
            .dive()
            .dive()
            .dive()
            .find('Styled(Styled(Button))')
            .simulate('click');

        expect(onClickEvent).toHaveBeenCalledTimes(1);
    });
});
