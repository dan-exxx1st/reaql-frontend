import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import { useQuery, useSubscription } from '@apollo/client';

import { DialogHeader } from 'components/common';

import { UserContext } from 'helpers/contexts/userContext';

import { DIALOG } from 'lib/graphql/queries/dialog';
import { DIALOG_ONLINE_STATUS } from 'lib/graphql/subscriptions/dialog';
import { Query, Subscription } from 'lib/graphql/types';

interface IProps {
    className?: string;
    dialogId: string;
    messageFilter?: Dispatch<SetStateAction<string>>;
    filterValue?: string;
}

const DialogHeaderWithData: FC<IProps> = ({ dialogId, ...otherProps }) => {
    const { state } = useContext(UserContext);

    const { data, loading } = useQuery<Query>(DIALOG, {
        variables: {
            dialogId,
        },
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
            <DialogHeader
                name={name}
                avatar={avatar}
                onlineStatus={onlineStatus}
                {...otherProps}
            />
        );
    }

    return <div>Loading...</div>;
};

export default DialogHeaderWithData;
