import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { MessageSearch } from 'components/common';
import { renderWithApollo } from 'tests/helpers/withApollo';

describe('<MessageSearch />', () => {
    describe('Snapshots', () => {
        it('Should render correctly', () => {
            const {
                container: { firstChild },
            } = renderWithApollo(<MessageSearch />);

            expect(firstChild).toMatchSnapshot();
        });
    });

    it('Should use onClick event', () => {
        const onClickEvent = jest.fn();
        renderWithApollo(<MessageSearch onClick={onClickEvent} />);

        fireEvent.click(screen.getByRole('button'));

        expect(onClickEvent).toHaveBeenCalledTimes(1);
    });
});
