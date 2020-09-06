import styled from 'styled-components';
import { Typography, Wrapper } from 'components/UI';

export const StyledEmojiPicker = styled.div`
    width: 250px;
    height: 250px;
    padding: 10px;
    padding-bottom: 0;

    border: ${({ theme }) => `1px solid ${theme.plc}`};
    border-radius: 5px;
`;

interface IStyledEmojiWrapper {
    isContentAfter: boolean;
}
export const StyledEmojiWrapper = styled(Wrapper)<IStyledEmojiWrapper>`
    padding-right: 5px;
    overflow-y: scroll;
    height: 220px;

    & > img:last-child {
        margin-right: ${({ isContentAfter }) => isContentAfter && 0};
        margin-left: ${({ isContentAfter }) => isContentAfter && '3px'};
    }
    &:after {
        content: '';
        flex: ${({ isContentAfter }) => isContentAfter && 1000};
    }
`;

export const StyledTypography = styled(Typography)`
    margin-bottom: 10px;
`;
