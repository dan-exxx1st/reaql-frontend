import React, { useState } from 'react';
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
    const [filterValue, setFilterValue] = useState('');

    return (
        <>
            {dialogId ? (
                <>
                    <StyledHomeDialogHeader
                        dialogId={dialogId}
                        messageFilter={setFilterValue}
                        filterValue={filterValue}
                    />
                    <StyledHomeDialogContentWrapper>
                        <MessageListWithData
                            dialogId={dialogId}
                            filterValue={filterValue}
                        />
                        <StyledHomeDialogTextField />
                    </StyledHomeDialogContentWrapper>
                </>
            ) : null}
        </>
    );
};

export default DialogPage;
