import React, { FC } from 'react';
import { Typography } from '..';
import { StyledCircle, StyledIcon } from './style';
import { ICircleProps } from 'lib/types/components/UI';

const Circle: FC<ICircleProps> = ({ iconName, text, ...otherProps }) => {
    if (text || iconName) {
        return (
            <StyledCircle
                justifyContent="center"
                alignItems="center"
                {...otherProps}
            >
                {iconName ? (
                    <StyledIcon iconName={iconName} />
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
