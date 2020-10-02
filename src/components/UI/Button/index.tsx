import React, { FC } from 'react';
import Typography from '../Typography';
import { StyledButton } from './style';

const Button: FC<NButton.IProps> = ({
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
