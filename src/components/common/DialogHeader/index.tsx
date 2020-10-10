import React from 'react';
import { Typography, Wrapper } from 'components/UI';
import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

const DialogHeader = () => {
    return (
        <StyledDialogHeader justifyContent="space-between">
            <Wrapper>
                <StyledAvatar />
                <Wrapper flexDirection="column">
                    <Typography variant="body1" color="dc">
                        Desirae Schleifer
                    </Typography>
                    <Typography variant="caption1" color="dgc">
                        Today at 3:30 pm
                    </Typography>
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <StyledCircle color="secondary" iconName="search" />
                <StyledCircle color="secondary" iconName="threeDotsGrey" />
            </Wrapper>
        </StyledDialogHeader>
    );
};

export default DialogHeader;
