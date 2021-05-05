import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';

import { MessageList } from 'components/common';

import { MESSAGES } from 'lib/graphql/queries/dialog';
import { Query, Subscription } from 'lib/graphql/types';

import { MESSAGE_CREATED } from 'lib/graphql/subscriptions/dialog';
import { messagesIsOver } from 'lib/graphql/apollo';

interface IProps {
    dialogId?: string;
    filterValue?: string;
}

const MessageListWithData: FC<IProps> = ({
    dialogId,
    filterValue,
    ...otherProps
}) => {
    const [from, setFrom] = useState(0);
    const [fetchedMore, setFetchedMore] = useState(false);
    const { subscribeToMore, ...result } = useQuery<Query>(MESSAGES, {
        variables: {
            dialogId,
            first: 20,
            from,
        },
        notifyOnNetworkStatusChange: true,
    });

    const subscribeToNewMessages = () => {
        return subscribeToMore({
            document: MESSAGE_CREATED,
            variables: { dialogId },
        });
    };

    const _handleLoadMore = () => {
        const newFrom = from + 20;

        if (!result?.loading && !messagesIsOver() && !fetchedMore) {
            setFetchedMore(true);
            result.fetchMore({
                variables: {
                    dialogId,
                    first: 20,
                    from: newFrom,
                },
            });
            setFrom(newFrom);
        }
    };

    return (
        <MessageList
            subscribeToNewMessages={subscribeToNewMessages}
            filterValue={filterValue}
            loadMore={_handleLoadMore}
            {...otherProps}
            {...result}
        />
    );
};

export default MessageListWithData;
