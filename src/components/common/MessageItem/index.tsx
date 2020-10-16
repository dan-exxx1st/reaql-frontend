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

const MessageItem: FC<IMessageItemProps> = ({ sended_message_status }) => (
    <StyledMessageItem>
        <StyledMessageAvatar alt="Desirae" />
        <StyledMessageBodyWrapper>
            <StyledMessageTopWrapper>
                <StyledMessageUserName variant="body1">
                    Desirae Schleifer
                </StyledMessageUserName>
                <StyledMessageTime variant="caption1">
                    10:00 am
                </StyledMessageTime>

                {sended_message_status === 'sended' && (
                    <StyledMessageCheckMark isChecked={false} isDouble={true} />
                )}
                {sended_message_status === 'readed' && (
                    <StyledMessageCheckMark isChecked={true} isDouble={true} />
                )}
            </StyledMessageTopWrapper>

            <StyledMessageText variant="body2">
                Hi. I’m fine, thanks. How are you, too?
            </StyledMessageText>
        </StyledMessageBodyWrapper>
    </StyledMessageItem>
);

export default MessageItem;
