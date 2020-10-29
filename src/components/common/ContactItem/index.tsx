import React, { FC, useEffect, useState } from 'react';
import StyledDialogListItem, {
    StyledContactItemAvatarWrapper,
    StyledContactItemCircle,
    StyledContactItemBottomLine,
    StyledContactItemRightWrapper,
} from './style';
import { Wrapper, Avatar, Typography, CheckMark } from 'components/UI';
import { IContactsItemProps } from 'lib/types/components/common';

const ContactItem: FC<IContactsItemProps> = ({
    avatar_src,
    name,
    last_message,
    last_message_date,
    unread_message_count,
    message_status,
}) => {
    const [isDoubleCheckMark, setIsDoubleCheckMark] = useState(false);
    const [isActiveCheckMark, setIsActiveCheckMark] = useState(false);
    const [undreadMessageCountText, setUnreadMessageCountText] = useState('');

    useEffect(() => {
        switch (message_status) {
            case 'sended': {
                setIsDoubleCheckMark(false);
                setIsActiveCheckMark(false);
                break;
            }

            case 'received': {
                setIsDoubleCheckMark(true);
                setIsActiveCheckMark(false);
                break;
            }

            case 'readed': {
                setIsDoubleCheckMark(true);
                setIsActiveCheckMark(true);
            }
        }
        if (unread_message_count) {
            if (unread_message_count > 0 && unread_message_count < 10) {
                setUnreadMessageCountText(unread_message_count.toString());
            } else {
                setUnreadMessageCountText('9+');
            }
        }
    }, []);

    return (
        <StyledDialogListItem flexWrap="wrap">
            <Wrapper height="40px" width="100%" justifyContent="space-between">
                <Wrapper height="40px">
                    <StyledContactItemAvatarWrapper>
                        <Avatar src={avatar_src} alt="Avatar image" />
                    </StyledContactItemAvatarWrapper>
                    <Wrapper
                        height="40px"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Typography variant="body1" color="dc">
                            {name}
                        </Typography>
                        <Typography variant="caption1" color="dsc">
                            {last_message}
                        </Typography>
                    </Wrapper>
                </Wrapper>
                <StyledContactItemRightWrapper
                    flexDirection="column"
                    height="40px"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Typography variant="caption1" color="dgc">
                        {last_message_date?.toString()}
                    </Typography>

                    <Wrapper>
                        {undreadMessageCountText ? (
                            <Wrapper>
                                <StyledContactItemCircle
                                    color="primary"
                                    text={undreadMessageCountText}
                                />
                            </Wrapper>
                        ) : (
                            <Wrapper>
                                <CheckMark
                                    isDouble={isDoubleCheckMark}
                                    isChecked={isActiveCheckMark}
                                />
                            </Wrapper>
                        )}
                    </Wrapper>
                </StyledContactItemRightWrapper>
            </Wrapper>

            <StyledContactItemBottomLine />
        </StyledDialogListItem>
    );
};

export default ContactItem;
