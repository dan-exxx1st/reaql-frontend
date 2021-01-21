import React, { FC, useEffect } from 'react';

import { StyledMessageListItem, StyledMessageListWrapper } from './style';

import { IMessageListProps } from 'lib/types/components/common';

const MessageList: FC<IMessageListProps> = ({ className, ...props }) => {
    const { data, loading, subscribeToNewMessages } = props;

    const messages = data?.messages;

    useEffect(() => {
        if (subscribeToNewMessages) {
            subscribeToNewMessages();
        }
    }, [subscribeToNewMessages]);

    if (!loading && messages) {
        return (
            <StyledMessageListWrapper className={className}>
                {messages.map(
                    (message) =>
                        message && (
                            <StyledMessageListItem
                                key={message.id}
                                {...message}
                            />
                        )
                )}
            </StyledMessageListWrapper>
        );
    }

    return <div>Loading...</div>;
};

export default MessageList;
