import React, { FC, ChangeEvent } from 'react';
import { Icon, Wrapper } from '..';
import { StyledTextField } from './style';

const TextField: FC<NTextField.IProps> = ({
    onChange,
    value,
    className = '',
    icon = '',
}) => {
    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const value = event.target.value;
            onChange(value);
        }
    };

    return (
        <Wrapper>
            <input
                className={className}
                onChange={onChangeText}
                value={value}
            />
            {icon && <Icon iconName={icon} />}
        </Wrapper>
    );
};

export default StyledTextField(TextField);
