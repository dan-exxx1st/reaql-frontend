import React, { FC, useEffect } from 'react';

import {
    StyledMessageListItem,
    StyledMessageListWrapper,
    StyledMessagesWrapper,
} from './style';

import { IMessageListProps } from 'lib/types/components/common';

const MessageList: FC<IMessageListProps> = ({ className, ...props }) => {
    const { data, loading, subscribeToNewMessages } = props;

    const messages = data?.messages;

    useEffect(() => {
        let unsubscribe: any;
        if (subscribeToNewMessages) {
            unsubscribe = subscribeToNewMessages();
        }

        return () => unsubscribe();
    }, [subscribeToNewMessages]);

    if (!loading && messages) {
        return (
            <StyledMessageListWrapper className={className}>
                <StyledMessagesWrapper>
                    {messages.map(
                        (message) =>
                            message && (
                                <StyledMessageListItem
                                    key={message.id}
                                    {...message}
                                />
                            )
                    )}
                </StyledMessagesWrapper>
            </StyledMessageListWrapper>
        );
    }

    return <div>Loading...</div>;
};

export default MessageList;
