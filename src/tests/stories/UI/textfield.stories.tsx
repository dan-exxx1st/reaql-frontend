import React, { useState } from 'react';
import { TextField, Wrapper } from 'components/UI';

export default {
    title: 'UI/Text field',
};

export const DefaultTextField = () => {
    const [smallText, setSmallText] = useState('Small text field');
    const [mediumText, setMediumText] = useState('Medium text field');
    const [largeText, setLargeText] = useState('Large text field');
    const [withIconText, setWithIconText] = useState('With icon text');
    return (
        <Wrapper flexDirection="column">
            <Wrapper alignItems="center">
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="large"
                        value={largeText}
                        onChange={(text: string) => setLargeText(text)}
                        className="customclass"
                        color="primary"
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="medium"
                        value={mediumText}
                        onChange={(text: string) => setMediumText(text)}
                        className="customclass"
                        color="primary"
                    />
                </Wrapper>

                <Wrapper margin="20px">
                    <TextField
                        fieldSize="small"
                        value={smallText}
                        onChange={(text: string) => setSmallText(text)}
                        className="customclass"
                        color="primary"
                    />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="large"
                        value={largeText}
                        onChange={(text: string) => setLargeText(text)}
                        className="customclass"
                        color="secondary"
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="medium"
                        value={mediumText}
                        onChange={(text: string) => setMediumText(text)}
                        className="customclass"
                        color="secondary"
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="small"
                        value={smallText}
                        onChange={(text: string) => setSmallText(text)}
                        className="customclass"
                        color="secondary"
                    />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="large"
                        value="Text11"
                        color="primary"
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="medium"
                        value="Text11111111111111111111111111111111111111111111111111111111111111111123"
                        color="primary"
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="small"
                        value="Text11"
                        color="primary"
                    />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="large"
                        value={withIconText}
                        onChange={setWithIconText}
                        color="primary"
                        icon="search"
                        width="416px"
                    />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};
