import React, { FC, useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_USERS_BY_EMAIL } from 'lib/graphql/queries/user';
import { Query } from 'lib/graphql/types';

import UserItem from '../UserItem';

import {
    StyledUserSearchModalTextField,
    StyledUserSearchModalTitle,
    StyledUserSearchModalUsersWrapper,
    StyledUserSearchModalWrapper,
} from './style';

interface IProps {
    setSearchUserOpened?: (val: boolean) => void;
    searchUserOpened?: boolean;
}

const UserSearchModal: FC<IProps> = (props) => {
    const { searchUserOpened, setSearchUserOpened } = props;

    const modalRef = useRef(null);
    const [searchEmail, setSearchEmail] = useState('');

    const { data } = useQuery<Query>(GET_USERS_BY_EMAIL, {
        variables: { email: searchEmail },
    });

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

    const _handleCreateDialog = (id: string) => {
        console.log('clicked', id);
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
                            data.findUsersByEmail &&
                            data.findUsersByEmail.map((user) => (
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
