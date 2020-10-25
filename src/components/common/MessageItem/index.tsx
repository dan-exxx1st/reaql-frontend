import React, { FC } from 'react';
import {
    StyledMessageAvatar,
    StyledMessageItem,
    StyledMessageUserName,
    StyledMessageTime,
    StyledMessageText,
    StyledMessageBodyWrapper,
    StyledMessageTopWrapper,
    StyledMessageCheckMark,
} from './style';
import { IMessageItemProps } from 'lib/types/components/common';

const MessageItem: FC<IMessageItemProps> = ({
    message_status,
    message_text,
    user_name,
    message_date,
}) => (
    <StyledMessageItem>
        <StyledMessageAvatar alt="Desirae" />
        <StyledMessageBodyWrapper>
            <StyledMessageTopWrapper>
                <StyledMessageUserName variant="body1">
                    {user_name}
                </StyledMessageUserName>
                <StyledMessageTime variant="caption1">
                    {message_date}
                </StyledMessageTime>

                {message_status === 'sended' && (
                    <StyledMessageCheckMark
                        isChecked={false}
                        isDouble={false}
                    />
                )}
                {message_status === 'received' && (
                    <StyledMessageCheckMark isChecked={false} isDouble={true} />
                )}
                {message_status === 'readed' && (
                    <StyledMessageCheckMark isChecked={true} isDouble={true} />
                )}
            </StyledMessageTopWrapper>

            <StyledMessageText variant="body2">
                {message_text}
            </StyledMessageText>
        </StyledMessageBodyWrapper>
    </StyledMessageItem>
);

export default MessageItem;
