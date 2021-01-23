import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../src/helpers/styled/index.ts';
import { addDecorator } from '@storybook/react';
import { MockedProvider } from '@apollo/client/testing';
import { mocks } from 'tests/__mocks__/graphql';

addDecorator((storyFn) => (
    <ThemeProvider theme={themes}>{storyFn()}</ThemeProvider>
));

addDecorator((storyFn) => (
    <MockedProvider mocks={mocks}>{storyFn()}</MockedProvider>
));
