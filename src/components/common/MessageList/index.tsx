import React, { FC, useEffect } from 'react';

import {
    StyledMessageListItem,
    StyledMessageListWrapper,
    StyledMessagesWrapper,
} from './style';

import { IMessageListProps } from 'lib/types/components/common';

const MessageList: FC<IMessageListProps> = ({ className, ...props }) => {
    const { data, loading, subscribeToNewMessages, filterValue } = props;

    const messages = data?.messages;

    const filteredMessages =
        filterValue && messages
            ? messages.filter((message) =>
                  message.text
                      .toLowerCase()
                      .includes(filterValue.toLocaleLowerCase())
              )
            : messages;

    useEffect(() => {
        let unsubscribe: any;
        if (subscribeToNewMessages) {
            unsubscribe = subscribeToNewMessages();
        }

        return () => unsubscribe();
    }, [subscribeToNewMessages]);

    if (!loading && filteredMessages) {
        return (
            <StyledMessageListWrapper className={className}>
                <StyledMessagesWrapper>
                    {filteredMessages &&
                        filteredMessages.map(
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
