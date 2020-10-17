import React from 'react';
import {
    StyledDialogHeaderBackdropWrapper,
    StyledDialogHeaderBackdropIcon,
    StyledDialogHeaderBackdropText,
    StyledDialogHeaderBackdropListWrapper,
    StyledDialogHeaderBackdropTriangle,
} from './style';

import PlusIcon from 'assets/images/icons/BluePlus.svg';
import SearchIcon from 'assets/images/icons/BlueSearch.svg';
import TrashIcon from 'assets/images/icons/BlueTrash.svg';

const DialogHeaderBackdrop = () => (
    <StyledDialogHeaderBackdropWrapper>
        <StyledDialogHeaderBackdropTriangle />
        <StyledDialogHeaderBackdropListWrapper>
            <StyledDialogHeaderBackdropIcon src={PlusIcon} />
            <StyledDialogHeaderBackdropText variant="body2">
                Add members
            </StyledDialogHeaderBackdropText>
        </StyledDialogHeaderBackdropListWrapper>

        <StyledDialogHeaderBackdropListWrapper>
            <StyledDialogHeaderBackdropIcon src={SearchIcon} />
            <StyledDialogHeaderBackdropText variant="body2">
                Search message history
            </StyledDialogHeaderBackdropText>
        </StyledDialogHeaderBackdropListWrapper>

        <StyledDialogHeaderBackdropListWrapper>
            <StyledDialogHeaderBackdropIcon src={TrashIcon} />
            <StyledDialogHeaderBackdropText variant="body2">
                Clear message history
            </StyledDialogHeaderBackdropText>
        </StyledDialogHeaderBackdropListWrapper>
    </StyledDialogHeaderBackdropWrapper>
);

export default DialogHeaderBackdrop;
