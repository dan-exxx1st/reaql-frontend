import React, { FC } from 'react';
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
    return (
        <StyledMessageSearchWrapper>
            <StyledMessageSearchTextField
                fieldSize="large"
                color="secondary"
                placeholder="Search message history"
                value={value}
                onChange={onChange}
            />
            <StyledMessageSearchCancelButton
                variant="filled"
                color="secondary"
                onClick={onClick}
            >
                Cancel
            </StyledMessageSearchCancelButton>
        </StyledMessageSearchWrapper>
    );
};

export default MessageSearch;
