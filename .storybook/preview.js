import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from 'styled-components';
import themes from '../src/helpers/styled/index.ts';
import { addDecorator } from '@storybook/react';
import mocks from './__mocks__/graphql';

addDecorator((storyFn) => (
    <ThemeProvider theme={themes}>{storyFn()}</ThemeProvider>
));

addDecorator((storyFn) => {
    return <MockedProvider mocks={mocks}>{storyFn()}</MockedProvider>;
});
