import '@babel/polyfill';

import React from 'react';
import { act, screen } from '@testing-library/react';
import SideBarWithData from 'components/data/SidebarWithData';

import { UserContextProvider } from 'helpers/contexts/userContext';
import { renderWithApollo } from 'tests/helpers/withApollo';
import { UsersMockData } from 'tests/__mocks__/data/users';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        search: '',
    }),
    useHistory: () => ({}),
}));

describe('<SideBar />', () => {
    const userReducer = {
        state: {
            user: UsersMockData[0],
        },
    };

    it('should render <DialogList /> correctly', async () => {
        await act(async () => {
            renderWithApollo(
                <UserContextProvider value={userReducer}>
                    <SideBarWithData />
                </UserContextProvider>
            );
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        expect(screen.getByText('Test User2')).toBeDefined();
        expect(screen.getByText('test')).toBeDefined();
        expect(screen.getByText('21.01.2020')).toBeDefined();
    });
});
