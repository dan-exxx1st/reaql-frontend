import React, { FC } from 'react';
import {
    StyledAddFileIcon,
    StyledDialogTextField,
    StyledEmojiIcon,
    StyledMicrophoneIcon,
    StyledRightIconsWrapper,
    StyledSendMessageIcon,
    StyledTextField,
} from './style';

import { IDialogTextFieldProps } from 'lib/types/components/common';

import SmileIcon from 'assets/images/icons/Smile.svg';
import MicrophoneIcon from 'assets/images/icons/Microphone.svg';
import AddFileIcon from 'assets/images/icons/AddFile.svg';
import SendMessageIcon from 'assets/images/icons/SendMessage.svg';

const DialogTextField: FC<IDialogTextFieldProps> = ({
    value,
    onChange,
    className,
}) => {
    return (
        <StyledDialogTextField className={className}>
            <StyledEmojiIcon src={SmileIcon} alt="Smile icon" />
            <StyledTextField
                color="secondary"
                fieldSize="medium"
                onChange={onChange}
                value={value}
            />
            <StyledRightIconsWrapper>
                <StyledMicrophoneIcon
                    src={MicrophoneIcon}
                    alt="Microphone icon"
                />
                <StyledAddFileIcon src={AddFileIcon} alt="Add file icon" />
                <StyledSendMessageIcon
                    src={SendMessageIcon}
                    alt="Send message icon"
                />
            </StyledRightIconsWrapper>
        </StyledDialogTextField>
    );
};

export default DialogTextField;
