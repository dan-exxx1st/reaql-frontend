import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { MessageList } from 'components/common';

import { MESSAGES } from 'lib/graphql/queries/dialog';
import { Query, Subscription } from 'lib/graphql/types';

import { MESSAGE_CREATED } from 'lib/graphql/subscriptions/dialog';

interface IProps {
    dialogId?: string;
    filterValue?: string;
}

const MessageListWithData: FC<IProps> = ({
    dialogId,
    filterValue,
    ...otherProps
}) => {
    const { subscribeToMore, ...result } = useQuery<Query>(MESSAGES, {
        variables: {
            dialogId,
        },
        pollInterval: 60000,
    });

    const subscribeToNewMessages = () =>
        subscribeToMore({
            document: MESSAGE_CREATED,
            variables: { dialogId },
            updateQuery: (
                prev,
                {
                    subscriptionData,
                }: { subscriptionData: { data: Subscription } }
            ) => {
                if (!subscriptionData) return prev;

                const newMessage = subscriptionData.data.messageCreated;
                const prevMessages = prev && prev.messages ? prev.messages : [];

                return {
                    ...prev,
                    messages: [newMessage, ...prevMessages],
                };
            },
        });

    return (
        <MessageList
            subscribeToNewMessages={subscribeToNewMessages}
            filterValue={filterValue}
            {...otherProps}
            {...result}
        />
    );
};

export default MessageListWithData;
