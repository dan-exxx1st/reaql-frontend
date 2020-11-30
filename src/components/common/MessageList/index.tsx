import React, { FC } from 'react';
import { IMessageListProps } from 'lib/types/components/common';
import { StyledMessageListItem, StyledMessageListWrapper } from './style';

const MessageList: FC<IMessageListProps> = ({ messages, className }) => {
    return (
        <StyledMessageListWrapper className={className}>
            {messages &&
                messages.map((message) => (
                    <StyledMessageListItem key={message.id} {...message} />
                ))}
        </StyledMessageListWrapper>
    );
};

export default MessageList;
