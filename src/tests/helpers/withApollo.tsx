import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { shallow, mount } from 'enzyme';

import { mocks } from 'tests/__mocks__/graphql';
import themes from 'helpers/styled';
import { ThemeProvider } from 'styled-components';

const shallowWithApolloAndStyled = (children: any) => {
    return shallow(
        <MockedProvider mocks={mocks}>
            <ThemeProvider theme={themes}>{children}</ThemeProvider>
        </MockedProvider>
    );
};

const mountWithApolloAndStyled = (children: any) => {
    return mount(
        <MockedProvider mocks={mocks}>
            <ThemeProvider theme={themes}>{children}</ThemeProvider>
        </MockedProvider>
    );
};

export { shallowWithApolloAndStyled, mountWithApolloAndStyled };
