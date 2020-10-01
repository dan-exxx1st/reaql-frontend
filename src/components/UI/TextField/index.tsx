import React, { FC, ChangeEvent } from 'react';
import { Icon } from '..';
import { StyledTextField } from './style';

const TextField: FC<NTextField.IProps> = ({
    onChange,
    value,
    className = '',
    icon = '',
}) => {
    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            console.log(event.target.value);
            const value = event.target.value;
            onChange(value);
        }
    };

    return (
        <>
            <input
                className={className}
                onChange={onChangeText}
                value={value}
            />
            {icon && <Icon iconName={icon} />}
        </>
    );
};

export default StyledTextField(TextField);
