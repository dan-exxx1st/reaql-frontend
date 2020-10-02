import React, { FC } from 'react';
import { Typography, Icon } from '..';
import { StyledCircle } from './style';

const Circle: FC<NCircle.IProps> = ({ iconName, text, ...otherProps }) => {
    if (text || iconName) {
        return (
            <StyledCircle
                justifyContent="center"
                alignItems="center"
                {...otherProps}
            >
                {iconName ? (
                    <Icon iconName={iconName} width="17px" height="17px" />
                ) : (
                    <Typography variant="caption2" {...otherProps}>
                        {text}
                    </Typography>
                )}
            </StyledCircle>
        );
    }

    return (
        <StyledCircle {...otherProps}>No icon or text in Circle!</StyledCircle>
    );
};

export default Circle;
