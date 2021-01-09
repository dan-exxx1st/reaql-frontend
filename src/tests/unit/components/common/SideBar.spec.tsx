import React from 'react';
import { ReactWrapper } from 'enzyme';

import SideBarWithData from 'components/data/SidebarWithData';

import { UserContextProvider } from 'helpers/contexts/userContext';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';
import { UsersMockData } from 'tests/__mocks__/data/users';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        search: '',
    }),
    useHistory: () => ({}),
}));

console.error = (err: string) => {
    if (
        err.indexOf(
            'Warning: An update to SideBarWithData inside a test was not wrapped in act'
        ) !== -1
    ) {
        return console.error(err);
    }
};

describe('<SideBar />', () => {
    let wrapper: ReactWrapper | null;

    beforeEach(() => {
        const userReducer = {
            state: {
                user: UsersMockData[0],
            },
        };
        wrapper = mountWithApolloAndStyled(
            <UserContextProvider value={userReducer}>
                <SideBarWithData />
            </UserContextProvider>
        );
    });

    afterEach(() => {
        wrapper = null;
    });

    it('should render <DialogList /> correctly', async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));

        wrapper?.update();

        expect(
            wrapper?.find('Styled(DialogList)').find('Styled(DialogItem)')
        ).toHaveLength(1);
    });
});
