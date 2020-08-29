import React from 'react';
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';

import themes from 'config/styled';

type ChildType = JSX.Element | JSX.Element[];

interface IProps {
    children: ChildType;
}

const ThemeProviderWithThemes = ({ children }: IProps) => {
    return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};

const shallowWithTheme = (children: ChildType) => {
    return shallow(
        <ThemeProviderWithThemes>{children}</ThemeProviderWithThemes>
    );
};

const mountWithTheme = (children: ChildType) => {
    const mountedComponent = mount(
        <ThemeProviderWithThemes>{children}</ThemeProviderWithThemes>
    );
    return mountedComponent;
};

export { shallowWithTheme, mountWithTheme };
