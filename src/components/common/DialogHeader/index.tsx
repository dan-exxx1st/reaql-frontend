import React, { useState } from 'react';
import { Typography, Wrapper } from 'components/UI';
import { MessageSearch } from '..';
import { StyledAvatar, StyledCircle, StyledDialogHeader } from './style';

const DialogHeader = () => {
    const [isShowMessageSearch, setIsShowMessageSearch] = useState(false);

    const _handleToggleMessageSearch = () => {
        setIsShowMessageSearch(!isShowMessageSearch);
    };

    return (
        <StyledDialogHeader justifyContent="space-between">
            {isShowMessageSearch ? (
                <MessageSearch onClick={_handleToggleMessageSearch} />
            ) : (
                <>
                    <Wrapper>
                        <StyledAvatar />
                        <Wrapper
                            flexDirection="column"
                            justifyContent="space-between"
                            height="40px"
                        >
                            <Typography variant="body1" color="dc">
                                Desirae Schleifer
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
};

export default DialogHeader;
