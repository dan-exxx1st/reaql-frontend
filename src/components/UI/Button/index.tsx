import React, { FC } from 'react';
import Typography from '../Typography';
import { StyledButton } from './style';
import { IButtonProps } from 'lib/types/components/UI';

const Button: FC<IButtonProps> = ({
    className = '',
    children,
    onClick,
    color,
}) => {
    return (
        <button className={className} onClick={onClick}>
            <Typography variant="body2" color={color}>
                {children}
            </Typography>
        </button>
    );
};

export default StyledButton(Button);
