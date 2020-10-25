import React from 'react';
import {
    StyledHomeWrapper,
    StyledHomeSidebar,
    StyledHomeDialog,
    StyledHomeUserHeader,
    StyledHomeContactsSearch,
    StyledHomeContacts,
    StyledHomeDialogHeader,
    StyledHomeDialogContentWrapper,
    StyledHomeDialogMessageWrapper,
    StyledHomeDialogTextField,
} from './style';

const HomePage = () => {
    return (
        <StyledHomeWrapper>
            <StyledHomeSidebar>
                <StyledHomeUserHeader />
                <StyledHomeContactsSearch color="secondary" fieldSize="large" />
                <StyledHomeContacts />
            </StyledHomeSidebar>
            <StyledHomeDialog>
                <StyledHomeDialogHeader />
                <StyledHomeDialogContentWrapper>
                    <StyledHomeDialogMessageWrapper></StyledHomeDialogMessageWrapper>
                    <StyledHomeDialogTextField />
                </StyledHomeDialogContentWrapper>
            </StyledHomeDialog>
        </StyledHomeWrapper>
    );
};

export default HomePage;
