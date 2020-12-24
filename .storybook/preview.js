import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../src/helpers/styled/index.ts';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
    <ThemeProvider theme={themes}>{storyFn()}</ThemeProvider>
));
