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
    messageFilter,
}) => {
    return (
        <StyledMessageSearchWrapper>
            <StyledMessageSearchTextField
                fieldSize="large"
                color="secondary"
                placeholder="Search message history"
                value={value}
                onChange={messageFilter}
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
