import React, { ReactElement } from 'react';
import { MockLink } from '@apollo/client/testing';
import { shallow, mount } from 'enzyme';

import { mocks } from 'tests/__mocks__/graphql';
import themes from 'helpers/styled';
import { ThemeProvider } from 'styled-components';
import {
    ApolloClient,
    InMemoryCache,
    ApolloContextValue,
} from '@apollo/client';

const shallowWithApolloAndStyled = (children: any) => {
    const client = new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }),
        link: new MockLink(mocks, true),
    });
    Object.defineProperty(React, Symbol.for('__APOLLO_CONTEXT__'), {
        value: React.createContext<ApolloContextValue>({
            client,
        }),
        enumerable: false,
        configurable: true,
        writable: false,
    });
    return shallow(<ThemeProvider theme={themes}>{children}</ThemeProvider>);
};

const mountWithApolloAndStyled = (children: any) => {
    const client = new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }),
        link: new MockLink(mocks, true),
    });
    Object.defineProperty(React, Symbol.for('__APOLLO_CONTEXT__'), {
        value: React.createContext<ApolloContextValue>({
            client,
        }),
        enumerable: false,
        configurable: true,
        writable: false,
    });
    return mount(<ThemeProvider theme={themes}>{children}</ThemeProvider>);
};

export { shallowWithApolloAndStyled, mountWithApolloAndStyled };
