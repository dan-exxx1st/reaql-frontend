import styled from 'styled-components';
import { Avatar, CheckMark, Typography, Wrapper } from 'components/UI';

export const StyledMessageAvatar = styled(Avatar)`
    margin-right: 15px;
`;

export const StyledMessageCheckMark = styled(CheckMark)`
    margin-left: 10px;
`;

export const StyledMessageUserName = styled(Typography)`
    margin-right: 10px;
    color: ${({ theme }) => theme.dc};
`;

export const StyledMessageTime = styled(Typography)`
    color: ${({ theme }) => theme.dgc};
`;

export const StyledMessageText = styled(Typography)`
    color: #000000;
`;

export const StyledMessageItem = styled(Wrapper)``;

export const StyledMessageBodyWrapper = styled(Wrapper)`
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
`;

export const StyledMessageTopWrapper = styled(Wrapper)`
    align-items: center;
`;
