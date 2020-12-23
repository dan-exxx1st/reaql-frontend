import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { decode } from 'querystring';

import { Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';

import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

import { IDialogHeaderProps } from 'lib/types/components/common';
import { Query } from 'lib/graphql/types';
import { GET_DIALOG } from 'lib/graphql/queries/dialog';

const DialogHeader: FC<IDialogHeaderProps> = ({ className }) => {
    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);

    const history = useHistory();
    const dialogId = decode(history.location.search)['?dialog'];

    const { data } = useQuery<Query>(GET_DIALOG, {
        variables: { dialogId },
    });

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
    };

    if (data && data.dialog) {
        const {
            dialog: { users, group },
        } = data;
        const name =
            !group && users[0]
                ? `${users[0].name} ${users[0].surname}`
                : 'group!!!'; //!SERVER
        const avatar = !group && users[0] ? users[0].avatar : ''; //!SERVER

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
