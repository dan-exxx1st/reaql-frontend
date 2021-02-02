import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    StyledHomeDialogHeader,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogTextField,
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
                        <MessageListWithData dialogId={dialogId} />
                        <StyledHomeDialogTextField />
                    </StyledHomeDialogContentWrapper>
                </>
            ) : null}
        </>
    );
};

export default DialogPage;
