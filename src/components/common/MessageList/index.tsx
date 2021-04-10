import React, { useRef, FC, useEffect } from 'react';

import {
    StyledMessageListItem,
    StyledMessageListWrapper,
    StyledMessagesWrapper,
} from './style';

import { IMessageListProps } from 'lib/types/components/common';

const MessageList: FC<IMessageListProps> = ({ className, ...props }) => {
    const { data, loading, subscribeToNewMessages, filterValue } = props;

    const divRef = useRef(<div></div>);

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
        const divRefCurrent =
            divRef && divRef.current && (divRef as any).current;
        if (divRefCurrent) {
            const scrollTop: number = divRefCurrent.scrollTop;
            if (scrollTop && scrollTop !== 0) {
                divRefCurrent.scrollTop = 0;
            }
        }

        let unsubscribe: any = () => {};
        if (subscribeToNewMessages) {
            unsubscribe = subscribeToNewMessages();
        }

        return () => unsubscribe();
    }, [divRef, subscribeToNewMessages]);

    if (!loading && filteredMessages) {
        return (
            <StyledMessageListWrapper className={className}>
                <StyledMessagesWrapper ref={divRef}>
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
