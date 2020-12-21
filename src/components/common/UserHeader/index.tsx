import React, { FC, useContext } from 'react';

import { StyledAvatar, StyledUserHeader, StyledCircle } from './style';
import { Typography, Wrapper } from 'components/UI';
import { IUserHeaderProps } from 'lib/types/components/common';

import { UserContext } from 'helpers/contexts/userContext';

const UserHeader: FC<IUserHeaderProps> = ({
    className,
    setSearchUserOpened,
}) => {
    const { state } = useContext(UserContext);

    if (state && state.user) {
        const { user } = state;
        const { name, surname } = user;

        const _handleNewDialogClick = () =>
            setSearchUserOpened && setSearchUserOpened(true);

        return (
            <StyledUserHeader>
                <Wrapper
                    justifyContent="space-between"
                    alignItems="center"
                    className={className}
                >
                    <Wrapper alignItems="center">
                        <StyledAvatar />
                        <Typography variant="h6">
                            {`${name} ${surname}`}
                        </Typography>
                    </Wrapper>
                    <Wrapper alignItems="center">
                        <StyledCircle
                            color="primary"
                            iconName="newChat"
                            onClick={_handleNewDialogClick}
                        />
                        <StyledCircle
                            color="primary"
                            iconName="threeDotsWhite"
                        />
                    </Wrapper>
                </Wrapper>
            </StyledUserHeader>
        );
    }
    return <div>Loading ...</div>;
};

export default UserHeader;
