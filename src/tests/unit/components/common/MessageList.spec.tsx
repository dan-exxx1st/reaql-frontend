import React from 'react';
import { MessageList } from 'components/common';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';

import { MessageListData } from 'tests/__mocks__/data/unit';

describe('<MessageList />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithApolloAndStyled(
                <MessageList data={{ messages: MessageListData }} />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
