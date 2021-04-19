import React, { FC, KeyboardEvent, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

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
import { Mutation } from 'lib/graphql/types';
import { CREATE_MESSAGE } from 'lib/graphql/mutations/dialog';
import { getDialogIdFromSearch } from 'helpers';
import { UserContext } from 'helpers/contexts/userContext';

import SmileIcon from 'assets/images/icons/Smile.svg';
import MicrophoneIcon from 'assets/images/icons/Microphone.svg';
import AddFileIcon from 'assets/images/icons/AddFile.svg';
import SendMessageIcon from 'assets/images/icons/SendMessage.svg';

const DialogTextField: FC<IDialogTextFieldProps> = ({ className }) => {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [createMessage] = useMutation<Mutation>(CREATE_MESSAGE);

    const location = useLocation();
    const dialogId = getDialogIdFromSearch(location.search);

    const { state: UserState } = useContext(UserContext);

    const _handleSendMessage = () => {
        createMessage({
            variables: {
                dialogId,
                userId: UserState?.user?.id,
                text: textFieldValue,
            },
        });

        setTextFieldValue('');
    };

    const _handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') _handleSendMessage();
    };

    return (
        <StyledDialogTextField
            className={className}
            onKeyPress={_handleKeyPress}
        >
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
                    onClick={_handleSendMessage}
                />
            </StyledRightIconsWrapper>
        </StyledDialogTextField>
    );
};

export default DialogTextField;
