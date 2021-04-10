import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import themes from 'helpers/styled';
import { ChildType } from '.';

const renderWithTheme = (children: ChildType, container: HTMLElement) => {
    return render(<ThemeProvider theme={themes}>{children}</ThemeProvider>, container);
};

export { renderWithTheme };
