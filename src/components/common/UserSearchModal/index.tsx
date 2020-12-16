import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { SEARCH_USERS } from 'lib/graphql/queries/user';
import { CREATE_DIALOG_MUTATION } from 'lib/graphql/mutations/dialog';
import {
    CreateDialogInput,
    Dialog_User_Roles,
    Mutation,
    Query,
} from 'lib/graphql/types';
import { UserContext } from 'helpers/contexts/userContext';

import UserItem from '../UserItem';

import {
    StyledUserSearchModalTextField,
    StyledUserSearchModalTitle,
    StyledUserSearchModalUsersWrapper,
    StyledUserSearchModalWrapper,
} from './style';
import { useHistory } from 'react-router-dom';

interface IProps {
    setSearchUserOpened?: (val: boolean) => void;
    searchUserOpened?: boolean;
}

const UserSearchModal: FC<IProps> = (props) => {
    const { searchUserOpened, setSearchUserOpened } = props;
    const { state: UserState } = useContext(UserContext);
    const history = useHistory();

    const modalRef = useRef(null);
    const [searchEmail, setSearchEmail] = useState('');

    const { data } = useQuery<Query>(SEARCH_USERS, {
        variables: { email: searchEmail, selfEmail: UserState?.user?.email },
    });
    const [createDialog, { error: CreateDialogError }] = useMutation<Mutation>(
        CREATE_DIALOG_MUTATION
    );

    const _handleCloseModal = (e: MouseEvent) => {
        const block = modalRef.current;
        if (block && setSearchUserOpened) {
            if (!(e as any).path.includes(block) && searchUserOpened) {
                setSearchUserOpened(!searchUserOpened);
            }
        }
    };

    const _handleChangeSearchEmail = (email: string) => {
        if (email !== searchEmail) {
            setSearchEmail(email);
        }
    };

    const _handleCreateDialog = async (id: string) => {
        if (UserState && UserState.user) {
            const { user } = UserState;
            const users: CreateDialogInput[] = [
                { userId: user.id, role: Dialog_User_Roles.Admin },
                { userId: id, role: Dialog_User_Roles.User },
            ];
            const { data } = await createDialog({
                variables: { input: users },
            });

            if (!CreateDialogError) {
                setSearchUserOpened && setSearchUserOpened(false);
                history.push(`/home?dialog=${data?.createDialog?.id}`);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', _handleCloseModal);

        return () => {
            document.removeEventListener('click', _handleCloseModal);
        };
    });

    return (
        <>
            <div ref={modalRef}>
                <StyledUserSearchModalWrapper>
                    <StyledUserSearchModalTitle variant="h6">
                        Users search
                    </StyledUserSearchModalTitle>
                    <StyledUserSearchModalTextField
                        fieldSize="large"
                        color="primary"
                        placeholder="Enter user email"
                        value={searchEmail}
                        onChange={_handleChangeSearchEmail}
                    />
                    <StyledUserSearchModalUsersWrapper>
                        {data &&
                            data.searchUsers &&
                            data.searchUsers.map((user) => (
                                <UserItem
                                    key={user.id}
                                    onClick={_handleCreateDialog}
                                    {...user}
                                />
                            ))}
                    </StyledUserSearchModalUsersWrapper>
                </StyledUserSearchModalWrapper>
            </div>
        </>
    );
};

export default UserSearchModal;
