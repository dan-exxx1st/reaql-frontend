import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { MessageList } from 'components/common';

import { MESSAGES } from 'lib/graphql/queries/dialog';
import { Query, Subscription } from 'lib/graphql/types';

import { MESSAGE_CREATED } from 'lib/graphql/subscriptions/dialog';

interface IProps {
    dialogId?: string;
}

const MessageListWithData: FC<IProps> = ({ dialogId, ...otherProps }) => {
    const { subscribeToMore, ...result } = useQuery<Query>(MESSAGES, {
        variables: {
            dialogId,
        },
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

                return Object.assign({}, prev, {
                    messages: [newMessage, ...prevMessages],
                });
            },
        });

    return (
        <MessageList
            subscribeToNewMessages={subscribeToNewMessages}
            {...otherProps}
            {...result}
        />
    );
};

export default MessageListWithData;
