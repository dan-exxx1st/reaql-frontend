import React, { ReactElement } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { shallow, mount } from 'enzyme';

import mocks from 'tests/__mocks__/graphql';

const shallowWithApollo = (children: ReactElement) => {
    return shallow(<MockedProvider mocks={mocks}>{children}</MockedProvider>);
};

const mountWithApollo = (children: ReactElement) => {
    return mount(<MockedProvider mocks={mocks}>{children}</MockedProvider>);
};

export { shallowWithApollo, mountWithApollo };
