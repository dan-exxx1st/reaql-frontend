import React from 'react';
import { MessageList } from 'components/common';
import { renderWithApollo } from 'tests/helpers/withApollo';

import { MessageListData } from 'tests/__mocks__/data/unit';

describe('<MessageList />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(
                <MessageList data={{ messages: MessageListData }} />
            );

            expect(firstChild).toMatchSnapshot();
        });
    });
});
