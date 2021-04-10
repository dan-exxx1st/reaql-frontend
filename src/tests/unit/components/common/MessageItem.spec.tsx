import React from 'react';
import { MessageItem } from 'components/common';

import { MessageItemData } from 'tests/__mocks__/data/unit';
import { renderWithApollo } from 'tests/helpers/withApollo';

describe('<MessageItem />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<MessageItem {...MessageItemData} />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly with sended message status', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<MessageItem {...MessageItemData} />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly with received message status', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<MessageItem {...MessageItemData} />);

            expect(firstChild).toMatchSnapshot();
        });

        it('Should render correctly with readed message status', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<MessageItem {...MessageItemData} />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
