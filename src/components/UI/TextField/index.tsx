import React, { FC, ChangeEvent } from 'react';
import { StyledTextField } from './style';

const TextField: FC<NTextField.IProps> = ({
    onChange,
    value,
    className = '',
    editable = false,
}) => {
    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.innerText);
        if (onChange) {
            const value = event.target.value;
            onChange(value);
        }
    };

    if (editable) {
        return (
            <div
                contentEditable
                suppressContentEditableWarning
                className={className}
                onInput={onChangeText}
            >
                {value}
            </div>
        );
    } else
        return (
            <input
                className={className}
                onChange={onChangeText}
                value={value}
            />
        );
};

export default StyledTextField(TextField);
