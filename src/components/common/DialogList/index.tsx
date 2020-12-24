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
                        dialogProps,
                        group,
                    } = dialog;

                    const filteredUsers = users.filter(
                        (user) => user?.id !== state?.user?.id
                    );
                    if (filteredUsers.length == 1 && users[0]) {
                        const userDialogProps = dialogProps.find(
                            (props) => props?.user.id === state?.user?.id
                        );
                        if (userDialogProps) {
                            const {
                                unreadMessages,
                                lastMessageStatus,
                            } = userDialogProps;
                            const {
                                name,
                                surname,
                                avatar: UserAvatar,
                            } = users[0];

                            const avatar = !group ? UserAvatar : '';

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
