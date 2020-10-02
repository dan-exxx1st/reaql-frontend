import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextField, Wrapper } from 'components/UI';

storiesOf('UI/ Text field', module)
    .add('with primary color', () => {
        const [smallText, setSmallText] = useState('Small text field');
        const [mediumText, setMediumText] = useState('Medium text field');
        const [largeText, setLargeText] = useState('Large text field');
        return (
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
        );
    })
    .add('with secondary color', () => {
        const [smallText, setSmallText] = useState('Small text field');
        const [mediumText, setMediumText] = useState('Medium text field');
        const [largeText, setLargeText] = useState('Large text field');

        return (
            <Wrapper alignItems="center">
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
        );
    })
    .add('with icons', () => {
        const [withIconText, setWithIconText] = useState('Large text field');

        return (
            <Wrapper margin="20px" alignItems="center">
                <TextField
                    fieldSize="large"
                    value={withIconText}
                    onChange={setWithIconText}
                    color="primary"
                    icon="search"
                    width="416px"
                />
            </Wrapper>
        );
    });
