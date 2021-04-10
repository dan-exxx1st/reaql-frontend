import React from 'react';
import { UserHeader } from 'components/common';
import { renderWithApollo } from 'tests/helpers/withApollo';

describe('<UserHeader />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<UserHeader />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
