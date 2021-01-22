import React, { FC, useContext, useState } from 'react';

import { Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';

import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

import { IDialogHeaderProps } from 'lib/types/components/common';
import { useQuery } from '@apollo/client';
import { Query } from 'lib/graphql/types';
import { DIALOG } from 'lib/graphql/queries/dialog';
import { UserContext } from 'helpers/contexts/userContext';

const DialogHeader: FC<IDialogHeaderProps> = ({ className, dialogId }) => {
    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);
    const { state } = useContext(UserContext);

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
    };

    const { data, loading } = useQuery<Query>(DIALOG, {
        variables: {
            dialogId,
        },
        fetchPolicy: 'no-cache',
    });

    if (data && data.dialog && !loading && state && state.user) {
        const { user } = state;
        const {
            dialog: { users, group },
        } = data;
        const otherUser = users.filter(
            (dialogUser) => dialogUser?.id !== user.id
        );
        const name =
            !group && otherUser[0]
                ? `${otherUser[0].name} ${otherUser[0].surname}`
                : 'group!!!'; //!SERVER
        const avatar = !group && otherUser[0] ? otherUser[0].avatar : ''; //!SERVER

        return (
            <StyledDialogHeader
                className={className}
                justifyContent="space-between"
            >
                {isShowMessageSearch ? (
                    <MessageSearch onClick={_handleToggleMessageSearch} />
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
                                    Today at 3:30 pm
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
