import React, { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useApolloClient, useSubscription } from '@apollo/client';

import StyledDialogListItem, {
    StyledDialogItemAvatarWrapper,
    StyledDialogItemCircle,
    StyledDialogItemRightWrapper,
} from './style';

import { Wrapper, Avatar, Typography, CheckMark } from 'components/UI';

import { IDialogsItemProps } from 'lib/types/components/common';
import { Message_Statuses, Subscription } from 'lib/graphql/types';

import { getDialogIdFromSearch } from 'helpers';
import { DIALOG_UPDATED } from 'lib/graphql/subscriptions/dialog';
import { DIALOG_DATA_UPDATE } from 'lib/graphql/fragments/dialog';

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
    const { search } = useLocation();
    const client = useApolloClient();

    const { data, loading } = useSubscription<Subscription>(DIALOG_UPDATED, {
        variables: {
            dialogId: id,
        },
        onSubscriptionData({ subscriptionData }) {
            if (subscriptionData.data && subscriptionData.data.dialogUpdated) {
                const { dialogUpdated } = subscriptionData.data;

                client.writeFragment({
                    id: `Dialog:${id}`,
                    fragment: DIALOG_DATA_UPDATE,
                    data: {
                        lastMessage: dialogUpdated.lastMessage,
                        lastMessageDate: dialogUpdated.lastMessageDate,
                        updatedAt: dialogUpdated.updatedAt,
                    },
                });
            }
        },
    });

    const [isDoubleCheckMark, setIsDoubleCheckMark] = useState(false);
    const [isActiveCheckMark, setIsActiveCheckMark] = useState(false);
    const [undreadMessageCountText, setUnreadMessageCountText] = useState('');
    const [lastMessageValue, setLastMessageValue] = useState({
        text: '',
        date: '',
    });

    const _handleClick = () => {
        const dialogId = getDialogIdFromSearch(search);
        if (dialogId !== id) {
            history.push(`?dialog=${id}`);
            return;
        }

        history.push('/home');
    };

    useEffect(() => {
        setLastMessageValue({
            text: lastMessage || '',
            date: lastMessageDate || '',
        });
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
    }, [
        client,
        data,
        id,
        lastMessage,
        lastMessageDate,
        lastMessageStatus,
        loading,
        unreadMessages,
    ]);

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
                            {lastMessageValue.text}
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
                        {lastMessageValue.date}
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
