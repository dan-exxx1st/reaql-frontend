import React, { ChangeEvent, FC } from 'react';
import { Icon } from '..';
import { StyledTextField, StyledWrapper } from './style';

const TextField: FC<NTextField.IProps> = ({
    onChange,
    value,
    className = '',
    icon = '',
    placeholder = '',
    ...otherProps
}) => {
    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const value = event.target.value;
            onChange(value);
        }
    };

    return (
        <StyledWrapper className={className} withIcon={icon}>
            <StyledTextField
                onChange={onChangeText}
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
