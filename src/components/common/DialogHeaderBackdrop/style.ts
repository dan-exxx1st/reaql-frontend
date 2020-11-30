import styled from 'styled-components';
import { Wrapper, Typography } from 'components/UI';

export const StyledDialogHeaderBackdropWrapper = styled(Wrapper)`
    position: relative;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.gc};
    max-width: 200px;
    border-radius: 5px;
`;

export const StyledDialogHeaderBackdropIcon = styled.img`
    margin-right: 10px;
`;

export const StyledDialogHeaderBackdropText = styled(Typography)`
    color: ${({ theme }) => theme.pc};
`;

export const StyledDialogHeaderBackdropListWrapper = styled(Wrapper)`
    align-items: center;
    cursor: pointer;
    width: calc(100% - 15px);
    padding: 5px 5px 5px 10px;

    &:hover {
        background: #f5f5f5;
    }
`;
