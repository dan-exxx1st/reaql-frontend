import React, { ReactElement } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { shallow, mount } from 'enzyme';

import mocks from 'tests/__mocks__/graphql';
import themes from 'helpers/styled';
import { ThemeProvider } from 'styled-components';

const shallowWithApollo = (children: ReactElement) => {
    return shallow(<MockedProvider mocks={mocks}>{children}</MockedProvider>);
};

const mountWithApollo = (children: ReactElement) => {
    return mount(<MockedProvider mocks={mocks}>{children}</MockedProvider>);
};

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

export {
    shallowWithApollo,
    mountWithApollo,
    shallowWithApolloAndStyled,
    mountWithApolloAndStyled,
};
