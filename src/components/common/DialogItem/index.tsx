import React, { FC, useEffect, useState } from 'react';
import StyledDialogListItem, {
    StyledDialogItemAvatarWrapper,
    StyledDialogItemCircle,
    StyledDialogItemRightWrapper,
} from './style';
import { Wrapper, Avatar, Typography, CheckMark } from 'components/UI';
import { IDialogsItemProps } from 'lib/types/components/common';
import { Message_Statuses } from 'lib/graphql/types';
import { useHistory } from 'react-router-dom';

const DialogItem: FC<IDialogsItemProps> = (props) => {
    const {
        id,
        lastMessageStatus,
        unreadMessages,
        avatar,
        name,
        surname,
        lastMessage,
        lastMessageDate,
    } = props;

    const history = useHistory();

    const [isDoubleCheckMark, setIsDoubleCheckMark] = useState(false);
    const [isActiveCheckMark, setIsActiveCheckMark] = useState(false);
    const [undreadMessageCountText, setUnreadMessageCountText] = useState('');

    const _handleClick = () => {
        history.push(`?dialog=${id}`);
    };

    useEffect(() => {
        if (lastMessageStatus) {
            switch (lastMessageStatus) {
                case Message_Statuses.Sended: {
                    setIsDoubleCheckMark(false);
                    setIsActiveCheckMark(false);
                    break;
                }

                case Message_Statuses.Recived: {
                    setIsDoubleCheckMark(true);
                    setIsActiveCheckMark(false);
                    break;
                }

                case Message_Statuses.Readed: {
                    setIsDoubleCheckMark(true);
                    setIsActiveCheckMark(true);
                }
            }
        }
        if (unreadMessages) {
            if (unreadMessages > 0 && unreadMessages < 10) {
                setUnreadMessageCountText(unreadMessages.toString());
            } else {
                setUnreadMessageCountText('9+');
            }
        }
    }, []);

    return (
        <StyledDialogListItem flexWrap="wrap" onClick={_handleClick}>
            <Wrapper height="40px" width="100%" justifyContent="space-between">
                <Wrapper height="40px">
                    <StyledDialogItemAvatarWrapper>
                        <Avatar src={avatar} alt="Avatar image" />
                    </StyledDialogItemAvatarWrapper>
                    <Wrapper
                        height="40px"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Typography variant="body1" color="dc">
                            {`${name} ${surname}`}
                        </Typography>
                        <Typography variant="caption1" color="dsc">
                            {lastMessage}
                        </Typography>
                    </Wrapper>
                </Wrapper>
                <StyledDialogItemRightWrapper
                    flexDirection="column"
                    height="40px"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Typography variant="caption1" color="dgc">
                        {lastMessageDate?.toString()}
                    </Typography>

                    <Wrapper>
                        {undreadMessageCountText ? (
                            <Wrapper>
                                <StyledDialogItemCircle
                                    color="primary"
                                    text={undreadMessageCountText}
                                />
                            </Wrapper>
                        ) : null}
                        {lastMessageStatus ? (
                            <Wrapper>
                                <CheckMark
                                    isDouble={isDoubleCheckMark}
                                    isChecked={isActiveCheckMark}
                                />
                            </Wrapper>
                        ) : null}
                    </Wrapper>
                </StyledDialogItemRightWrapper>
            </Wrapper>
        </StyledDialogListItem>
    );
};

export default DialogItem;
