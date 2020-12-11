import React from 'react';
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';

import themes from 'helpers/styled';
import { ChildType } from '.';

const shallowWithTheme = (children: ChildType) => {
    return shallow(<ThemeProvider theme={themes}>{children}</ThemeProvider>);
};

const mountWithTheme = (children: ChildType) => {
    return mount(<ThemeProvider theme={themes}>{children}</ThemeProvider>);
};

export { shallowWithTheme, mountWithTheme };
