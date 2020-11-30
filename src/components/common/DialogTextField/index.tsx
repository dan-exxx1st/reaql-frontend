import React, { FC, useState } from 'react';
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

const DialogTextField: FC<IDialogTextFieldProps> = ({ className }) => {
    const [textFieldValue, setTextFieldValue] = useState('');

    return (
        <StyledDialogTextField className={className}>
            <StyledEmojiIcon
                src={SmileIcon}
                alt="Smile icon"
                draggable={false}
            />
            <StyledTextField
                color="secondary"
                fieldSize="medium"
                onChange={setTextFieldValue}
                value={textFieldValue}
                placeholder="Write you message..."
            />
            <StyledRightIconsWrapper>
                <StyledMicrophoneIcon
                    src={MicrophoneIcon}
                    alt="Microphone icon"
                    draggable={false}
                />
                <StyledAddFileIcon
                    src={AddFileIcon}
                    alt="Add file icon"
                    draggable={false}
                />
                <StyledSendMessageIcon
                    src={SendMessageIcon}
                    alt="Send message icon"
                    draggable={false}
                />
            </StyledRightIconsWrapper>
        </StyledDialogTextField>
    );
};

export default DialogTextField;
