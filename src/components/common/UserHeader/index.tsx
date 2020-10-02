import React from 'react';
import StyledUserHeader from './style';
import { Avatar, Circle, Typography, Wrapper } from 'components/UI';

const UserHeader = () => {
    return (
        <Wrapper>
            <Avatar /> <Typography variant="body1">Daniil Parfenov</Typography>
            <Circle
                color="primary"
                iconName="newChat"
                width="30px"
                height="30px"
                cursor="pointer"
            />
            <Circle
                color="primary"
                iconName="threeDots"
                width="30px"
                height="30px"
                cursor="pointer"
            />
        </Wrapper>
    );
};

export default StyledUserHeader(UserHeader);
