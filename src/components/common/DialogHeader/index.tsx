import React, { FC, useState } from 'react';

import { Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';

import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

import { IDialogHeaderProps } from 'lib/types/components/common';

const DialogHeader: FC<IDialogHeaderProps> = ({ className }) => {
    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
    };

    // if (dialog) {
    //     const { users, group } = dialog;
    //     const name =
    //         !group && users[0]
    //             ? `${users[0].name} ${users[0].surname}`
    //             : 'group!!!'; //!SERVER
    //     const avatar = !group && users[0] ? users[0].avatar : ''; //!SERVER

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
                        <StyledAvatar src={''} />
                        <Wrapper
                            flexDirection="column"
                            justifyContent="space-between"
                            height="40px"
                        >
                            <Typography variant="body1" color="dc">
                                {'name'}
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
    // }

    // return <div>Loading...</div>;
};

export default DialogHeader;
