import React, { FC, useEffect } from 'react';

import { StyledMessageListItem } from './style';

import { IMessageListProps } from 'lib/types/components/common';
import { Spinner } from 'components/UI';
import { ScrollableWrapper } from '..';

const MessageList: FC<IMessageListProps> = ({ className, ...props }) => {
    const {
        data,
        loading,
        subscribeToNewMessages,
        filterValue,
        loadMore,
    } = props;

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
        let unsubscribe = () => {};

        if (subscribeToNewMessages) {
            unsubscribe = subscribeToNewMessages();
        }

        return () => unsubscribe();
    }, [loading, subscribeToNewMessages]);

    if (!loading && filteredMessages) {
        return (
            <ScrollableWrapper scrollEvent={loadMore} className={className}>
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
            </ScrollableWrapper>
        );
    }

    return <Spinner />;
};

export default MessageList;
