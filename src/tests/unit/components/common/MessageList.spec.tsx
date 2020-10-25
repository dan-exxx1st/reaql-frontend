import React from 'react';
import { MessageList } from 'components/common';
import { mountWithTheme } from 'tests/helpers/withTheme';
import { MessageListData } from 'tests/__mocks__/data/unit';

describe('<MessageList />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const wrapper = mountWithTheme(
                <MessageList messages={MessageListData} />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
