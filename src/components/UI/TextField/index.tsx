import React, { FC } from 'react';
import { Icon } from '..';
import { StyledTextField, StyledWrapper } from './style';
import { ITextFieldProps } from 'lib/types/components/UI';

const TextField: FC<ITextFieldProps> = ({
    onChange,
    value,
    className,
    icon,
    placeholder,
    ...otherProps
}) => {
    const _handleOnChange = (event: any) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (
        <StyledWrapper className={className} withIcon={icon}>
            <StyledTextField
                onChange={_handleOnChange}
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
