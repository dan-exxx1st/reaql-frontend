import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import themes from 'helpers/styled';
import { ChildType } from '.';

const renderWithTheme = (children: ChildType) => {
    return render(<ThemeProvider theme={themes}>{children}</ThemeProvider>);
};

export { renderWithTheme };
