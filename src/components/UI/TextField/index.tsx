import React, { FC } from 'react';
import { Icon } from '..';
import { StyledTextField, StyledWrapper } from './style';
import { ITextFieldProps } from 'lib/types/components/UI';

const TextField: FC<ITextFieldProps> = ({
    onChange = () => {},
    value = '',
    className = '',
    icon,
    placeholder = '',
    ...otherProps
}) => {
    return (
        <StyledWrapper className={className} withIcon={icon}>
            <StyledTextField
                onChange={onChange}
                value={value}
                icon={icon}
                placeholder={placeholder}
                {...otherProps}
            />
            {icon && <Icon iconName={icon} />}
        </StyledWrapper>
    );
};

export default TextField;
