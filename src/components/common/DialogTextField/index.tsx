import React from 'react';
import {
    StyledAddFileIcon,
    StyledDialogTextField,
    StyledEmojiIcon,
    StyledMicrophoneIcon,
    StyledRightIconsWrapper,
    StyledSendMessageIcon,
    StyledTextField,
} from './style';

import SmileIcon from 'assets/images/icons/Smile.svg';
import MicrophoneIcon from 'assets/images/icons/Microphone.svg';
import AddFileIcon from 'assets/images/icons/AddFile.svg';
import SendMessageIcon from 'assets/images/icons/SendMessage.svg';

const DialogTextField = () => {
    return (
        <StyledDialogTextField>
            <StyledEmojiIcon src={SmileIcon} alt="Smile icon" />
            <StyledTextField color="secondary" fieldSize="medium" />
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
