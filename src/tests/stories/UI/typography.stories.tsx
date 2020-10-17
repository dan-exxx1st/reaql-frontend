import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography, Wrapper } from 'components/UI';

storiesOf('UI/ Typography', module)
    .add('titles', () => (
        <Wrapper flexDirection="column">
            <Wrapper margin="20px">
                <Typography variant="h1">H1 Title</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="h2">H2 Title</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="h3">H3 Title</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="h4">H4 Title</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="h5">H5 Title</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="h6">H6 Title</Typography>
            </Wrapper>
        </Wrapper>
    ))
    .add('text', () => (
        <Wrapper flexDirection="column">
            <Wrapper margin="20px">
                <Typography variant="body1">Body 1</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="body2">Body 2</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="caption1">Caption 1</Typography>
            </Wrapper>
            <Wrapper margin="20px">
                <Typography variant="caption2">Caption 2</Typography>
            </Wrapper>
        </Wrapper>
    ));
