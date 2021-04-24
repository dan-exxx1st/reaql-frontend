import React, { FC, useState } from 'react';

import { Spinner, Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';

import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

import { IDialogHeaderProps } from 'lib/types/components/common';

const DialogHeader: FC<IDialogHeaderProps> = (props) => {
    const {
        name,
        avatar,
        onlineStatus,
        className,
        messageFilter,
        filterValue,
        loading,
    } = props;

    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
        messageFilter && messageFilter('');
    };

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
                    {loading ? (
                        <Spinner />
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
                </>
            )}
        </StyledDialogHeader>
    );
};

export default DialogHeader;
