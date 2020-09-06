import React from 'react';
import { TextField, Wrapper } from 'components/UI';

export default {
    title: 'UI/Text field',
};

export const DefaultTextField = () => {
    const [smallText, setSmallText] = React.useState('Small text field');
    const [mediumText, setMediumText] = React.useState('Medium text field');
    const [largeText, setLargeText] = React.useState('Large text field');
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
                        editable
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="medium"
                        value="Text11111111111111111111111111111111111111111111111111111111111111111123"
                        color="primary"
                        editable
                    />
                </Wrapper>
                <Wrapper margin="20px">
                    <TextField
                        fieldSize="small"
                        value="Text11"
                        color="primary"
                        editable
                    />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};
