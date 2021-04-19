import React from 'react';
import { screen } from '@testing-library/react';
import SideBar from 'components/common/SideBar';

import { UserContextProvider } from 'helpers/contexts/userContext';
import { renderWithApollo } from 'tests/helpers/withApollo';
import { UsersMockData } from 'tests/__mocks__/data/users';
import { DialogsMockData } from 'tests/__mocks__/data/graphql';

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

    it('should render <DialogList /> correctly', () => {
        const data = {
            dialogs: DialogsMockData,
        };
        renderWithApollo(
            <UserContextProvider value={userReducer}>
                <SideBar
                    data={data}
                    loading={false}
                    setSearchUserOpened={() => {}}
                />
            </UserContextProvider>
        );
        expect(screen.getByText('Test User2')).toBeDefined();
        expect(screen.getByText('test')).toBeDefined();
        expect(screen.getByText('21.01.2020')).toBeDefined();
    });
});
