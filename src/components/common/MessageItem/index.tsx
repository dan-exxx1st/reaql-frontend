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
import { Message_Statuses } from 'lib/graphql/types';

const MessageItem: FC<IMessageItemProps> = (props) => {
    const { messageStatus, text, messageDate, className, user } = props;
    const { avatar, name, surname } = user;
    return (
        <StyledMessageItem className={className}>
            <StyledMessageAvatar src={avatar} alt="Desirae" />
            <StyledMessageBodyWrapper>
                <StyledMessageTopWrapper>
                    <StyledMessageUserName variant="body1">
                        {`${name} ${surname}`}
                    </StyledMessageUserName>
                    <StyledMessageTime variant="caption1">
                        {messageDate}
                    </StyledMessageTime>

                    {messageStatus === Message_Statuses.Sended && (
                        <StyledMessageCheckMark
                            isChecked={false}
                            isDouble={false}
                        />
                    )}
                    {messageStatus === Message_Statuses.Recived && (
                        <StyledMessageCheckMark
                            isChecked={false}
                            isDouble={true}
                        />
                    )}
                    {messageStatus === Message_Statuses.Readed && (
                        <StyledMessageCheckMark
                            isChecked={true}
                            isDouble={true}
                        />
                    )}
                </StyledMessageTopWrapper>

                <StyledMessageText variant="body2">{text}</StyledMessageText>
            </StyledMessageBodyWrapper>
        </StyledMessageItem>
    );
};

export default MessageItem;
