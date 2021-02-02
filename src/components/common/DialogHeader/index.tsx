import React, { FC, useContext, useState } from 'react';
import { useQuery, useSubscription } from '@apollo/client';

import { Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';

import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

import { IDialogHeaderProps } from 'lib/types/components/common';
import { Query, Subscription } from 'lib/graphql/types';
import { DIALOG } from 'lib/graphql/queries/dialog';
import { UserContext } from 'helpers/contexts/userContext';
import { DIALOG_ONLINE_STATUS } from 'lib/graphql/subscriptions/dialog';

const DialogHeader: FC<IDialogHeaderProps> = ({
    className,
    dialogId,
    messageFilter,
    filterValue,
}) => {
    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);
    const { state } = useContext(UserContext);

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
        messageFilter && messageFilter('');
    };

    const { data, loading } = useQuery<Query>(DIALOG, {
        variables: {
            dialogId,
        },
        fetchPolicy: 'no-cache',
    });

    const otherUser =
        data &&
        data.dialog &&
        data.dialog.users.filter(
            (dialogUser) => dialogUser?.id !== state?.user?.id
        );

    const { data: SubData } = useSubscription<Subscription>(
        DIALOG_ONLINE_STATUS,
        {
            variables: {
                userId: otherUser && otherUser[0]?.id,
            },
        }
    );

    if (data && data.dialog && !loading && otherUser) {
        const {
            dialog: { group },
        } = data;

        const name =
            !group && otherUser[0]
                ? `${otherUser[0].name} ${otherUser[0].surname}`
                : 'group!!!'; //!SERVER
        const avatar = !group && otherUser[0] ? otherUser[0].avatar : ''; //!SERVER
        const onlineStatus = SubData
            ? SubData.dialogOnlineUpdated.online
            : !group && otherUser[0]
            ? otherUser[0].online
            : '';

        return (
            <StyledDialogHeader
                className={className}
                justifyContent="space-between"
            >
                {isShowMessageSearch ? (
                    <MessageSearch
                        onClick={_handleToggleMessageSearch}
                        messageFilter={messageFilter}
                        value={filterValue}
                    />
                ) : (
                    <>
                        <Wrapper>
                            <StyledAvatar src={avatar} />
                            <Wrapper
                                flexDirection="column"
                                justifyContent="space-between"
                                height="40px"
                            >
                                <Typography variant="body1" color="dc">
                                    {name}
                                </Typography>
                                <Typography variant="caption1" color="dgc">
                                    {onlineStatus}
                                </Typography>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper>
                            <StyledCircle
                                color="secondary"
                                iconName="search"
                                onClick={_handleToggleMessageSearch}
                            />
                            <StyledCircle
                                color="secondary"
                                iconName="threeDotsGrey"
                            />
                        </Wrapper>
                    </>
                )}
            </StyledDialogHeader>
        );
    }

    return <div>Loading...</div>;
};

export default DialogHeader;
