import React from 'react';
import { MessageItem } from 'components/common';

import { MessageItemData } from 'tests/__mocks__/data/unit';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

describe('<MessageItem />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(
                <MessageItem {...MessageItemData} />
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly with sended message status', () => {
            const wrapper = mountWithApolloAndStyled(
                <MessageItem {...MessageItemData} />
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly with received message status', () => {
            const wrapper = mountWithApolloAndStyled(
                <MessageItem {...MessageItemData} />
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('Should render correctly with readed message status', () => {
            const wrapper = mountWithApolloAndStyled(
                <MessageItem {...MessageItemData} />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
