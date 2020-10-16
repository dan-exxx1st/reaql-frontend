import React, { FC, SyntheticEvent } from 'react';
import {
    StyledMessageSearchWrapper,
    StyledMessageSearchTextField,
    StyledMessageSearchCancelButton,
} from './style';
import { IMessageSearchProps } from 'lib/types/components/common';

const MessageSearch: FC<IMessageSearchProps> = ({ onClick }) => {
    const _handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledMessageSearchWrapper>
            <StyledMessageSearchTextField
                fieldSize="medium"
                color="secondary"
                placeholder="Search message history"
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
