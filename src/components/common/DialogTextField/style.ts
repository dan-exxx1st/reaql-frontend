import styled from 'styled-components';
import { TextField, Wrapper } from 'components/UI';

export const StyledDialogTextField = styled(Wrapper)`
    max-width: 936px;
    position: relative;
    margin-top: auto;

    & img {
        cursor: pointer;
    }
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
    max-width: 936px;

    & > input {
        padding: 15px 120px 15px 50px;
        width: calc(100% - 120px - 50px);
    }
`;

export const StyledEmojiIcon = styled.img`
    position: absolute;
    left: 20px;
    top: 15px;
    margin-right: 20px;
`;

export const StyledMicrophoneIcon = styled.img`
    margin-right: 20px;
    user-select: none;
`;

export const StyledAddFileIcon = styled.img`
    margin-right: 20px;
    user-select: none;
`;

export const StyledSendMessageIcon = styled.img`
    margin-right: 20px;
    user-select: none;
`;

export const StyledRightIconsWrapper = styled(Wrapper)`
    justify-content: space-between;
    position: absolute;
    top: 15px;
    right: 0;
`;
