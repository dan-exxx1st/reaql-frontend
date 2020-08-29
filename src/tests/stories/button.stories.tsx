import * as React from 'react';
import { Wrapper, Button } from 'components/UI';

export default {
    title: 'UI/Button',
};

export const PrimaryButton = () => (
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
);

export const SecondaryButton = () => (
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
);
