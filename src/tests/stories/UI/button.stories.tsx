import React from 'react';
import { storiesOf } from '@storybook/react';
import { Wrapper, Button } from 'components/UI';

storiesOf('UI/ Button', module)
    .add('primary', () => (
        <Wrapper>
            <Wrapper margin="20px">
                <Button color="primary" variant="filled">
                    Primary filled button
                </Button>
            </Wrapper>
            <Wrapper margin="20px">
                <Button color="primary" variant="outlined">
                    Primary outlined button
                </Button>
            </Wrapper>
        </Wrapper>
    ))
    .add('secondary', () => (
        <Wrapper>
            <Wrapper margin="20px">
                <Button color="secondary" variant="filled">
                    Secondary filled button
                </Button>
            </Wrapper>
            <Wrapper margin="20px">
                <Button color="secondary" variant="outlined">
                    Secondary outlined button
                </Button>
            </Wrapper>
        </Wrapper>
    ));
