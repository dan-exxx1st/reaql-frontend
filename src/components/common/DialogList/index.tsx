import React, { FC, useContext } from 'react';

import {
    IDialogListProps,
    IDialogsItemProps,
} from 'lib/types/components/common';

import { StyledDialogListWrapper, StyledDialogListItem } from './style';
import { UserContext } from 'helpers/contexts/userContext';

const DialogList: FC<IDialogListProps> = ({ dialogs, ...otherProps }) => {
    const { state } = useContext(UserContext);

    return (
        <StyledDialogListWrapper {...otherProps}>
            {dialogs &&
                dialogs.map((dialog) => {
                    const {
                        id,
                        users,
                        lastMessage,
                        lastMessageDate,
                        // group,
                    } = dialog;

                    const filteredUsers = users.filter(
                        (user) => user?.id !== state?.user?.id
                    );
                    if (filteredUsers.length == 1 && users[0]) {
                        const dialogProps = dialog.dialogProps.find(
                            (props) => props?.user.id === state?.user?.id
                        );
                        if (dialogProps) {
                            const {
                                unreadMessages,
                                lastMessageStatus,
                            } = dialogProps;
                            const { name, surname, avatar } = users[0];
                            const data: IDialogsItemProps = {
                                id,
                                name,
                                surname,
                                avatar,
                                unreadMessages,
                                lastMessageStatus,
                                lastMessage,
                                lastMessageDate,
                            };

                            return <StyledDialogListItem key={id} {...data} />;
                        }
                    }

                    return null;
                })}
        </StyledDialogListWrapper>
    );
};

export default DialogList;
