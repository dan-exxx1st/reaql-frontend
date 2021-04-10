import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';

import { mocks } from 'tests/__mocks__/graphql';
import themes from 'helpers/styled';

const renderWithApollo = (children: any) => {
    return render(
        <MockedProvider mocks={mocks}>
            <ThemeProvider theme={themes}>{children}</ThemeProvider>
        </MockedProvider>
    );
};

export { renderWithApollo };
