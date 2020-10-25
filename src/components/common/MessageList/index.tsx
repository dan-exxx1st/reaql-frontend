import React, { FC } from 'react';
import { IMessageListProps } from 'lib/types/components/common';
import { StyledMessageListItem, StyledMessageListWrapper } from './style';

const MessageList: FC<IMessageListProps> = ({ messages }) => {
    return (
        <StyledMessageListWrapper>
            {messages &&
                messages.map((message) => (
                    <StyledMessageListItem key={message.id} {...message} />
                ))}
        </StyledMessageListWrapper>
    );
};

export default MessageList;
