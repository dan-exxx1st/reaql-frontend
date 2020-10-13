import React from 'react';
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

const MessageItem = ({ sended_message_status }: NMessageItem.IProps) => (
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
            </StyledMessageTopWrapper>

            <StyledMessageText variant="body2">
                Hi. I’m fine, thanks. How are you, too?
            </StyledMessageText>
        </StyledMessageBodyWrapper>
    </StyledMessageItem>
);

export default MessageItem;
