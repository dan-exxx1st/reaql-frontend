import React, { FC, SyntheticEvent, ChangeEvent } from 'react';
import {
    StyledMessageSearchWrapper,
    StyledMessageSearchTextField,
    StyledMessageSearchCancelButton,
} from './style';
import { IMessageSearchProps } from 'lib/types/components/common';

const MessageSearch: FC<IMessageSearchProps> = ({
    onClick,
    value,
    onChange,
}) => {
    const _handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (onChange) onChange(value);
    };

    return (
        <StyledMessageSearchWrapper>
            <StyledMessageSearchTextField
                fieldSize="medium"
                color="secondary"
                placeholder="Search message history"
                value={value}
                onChange={_handleChange}
            />
            <StyledMessageSearchCancelButton
                variant="filled"
                color="secondary"
                onClick={_handleClick}
            >
                Cancel
            </StyledMessageSearchCancelButton>
        </StyledMessageSearchWrapper>
    );
};

export default MessageSearch;
