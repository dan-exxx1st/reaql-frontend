import React, { FC, ChangeEvent } from 'react';
import { StyledTextField } from './style';

const TextField: FC<NTextField.IProps> = ({
    onChange,
    value,
    className = '',
}) => {
    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const value = event.target.value;
            onChange(value);
        }
    };
    return (
        <input className={className} onChange={onChangeText} value={value} />
    );
};

export default StyledTextField(TextField);
