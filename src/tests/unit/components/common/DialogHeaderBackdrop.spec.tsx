import React from 'react';
import { DialogHeaderBackdrop } from 'components/common';
import { renderWithApollo } from 'tests/helpers/withApollo';

describe('<DialogHeaderBackdrop />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<DialogHeaderBackdrop />);

            expect(firstChild).toMatchSnapshot();
        });
    });
});
