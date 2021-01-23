import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    StyledHomeDialogHeader,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogTextField,
    StyledHomeDialogMessageWrapper,
} from './styles/Home';

import { getDialogIdFromSearch } from 'helpers';
import { MessageListWithData } from 'components/data';

const DialogPage = () => {
    const { search } = useLocation();
    const dialogId = getDialogIdFromSearch(search);

    return (
        <>
            {dialogId ? (
                <>
                    <StyledHomeDialogHeader dialogId={dialogId} />
                    <StyledHomeDialogContentWrapper>
                        <StyledHomeDialogMessageWrapper>
                            <MessageListWithData dialogId={dialogId} />
                        </StyledHomeDialogMessageWrapper>
                        <StyledHomeDialogTextField />
                    </StyledHomeDialogContentWrapper>
                </>
            ) : null}
        </>
    );
};

export default DialogPage;
