import React from 'react';
import { ReactWrapper } from 'enzyme';

import SideBarWithData from 'components/data/SidebarWithData';

import { UserContextProvider } from 'helpers/contexts/userContext';
import { mountWithApolloAndStyled } from 'tests/helpers/withApollo';
import { UsersMockData } from 'tests/__mocks__/data/users';
import { DialogsMockData } from 'tests/__mocks__/data/graphql';

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
    let wrapper: ReactWrapper;
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

    it('should render <DialogList /> correctly', async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        wrapper?.update();
        const dialogList = wrapper?.find('Styled(DialogList)');
        const typeographys = dialogList
            ?.find('Styled(DialogItem)')
            .find('Styled(Typography)');

        expect(typeographys.get(0).props.children).toEqual('Test User2');
        expect(typeographys.get(1).props.children).toEqual('test');
        expect(typeographys.get(2).props.children).toEqual('21.01.2020');
    });
});
