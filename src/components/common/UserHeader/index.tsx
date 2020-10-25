import React, { FC } from 'react';
import { StyledAvatar, StyledUserHeader, StyledCircle } from './style';
import { Typography, Wrapper } from 'components/UI';
import { IUserHeaderProps } from 'lib/types/components/common';

const UserHeader: FC<IUserHeaderProps> = ({ className }) => {
    return (
        <Wrapper
            justifyContent="space-between"
            alignItems="center"
            className={className}
        >
            <Wrapper alignItems="center">
                <StyledAvatar />
                <Typography variant="h6">Daniil Parfenov</Typography>
            </Wrapper>
            <Wrapper alignItems="center">
                <StyledCircle color="primary" iconName="newChat" />
                <StyledCircle color="primary" iconName="threeDotsWhite" />
            </Wrapper>
        </Wrapper>
    );
};

export default StyledUserHeader(UserHeader);
