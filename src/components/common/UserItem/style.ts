import styled from 'styled-components';

import { Avatar, Icon, Typography, Wrapper } from 'components/UI';

export const StyledUserItemWrapper = styled(Wrapper)`
    padding: 10px 2.5px;

    width: calc(100% - 5px);
    border-bottom: 1px solid ${({ theme }) => theme.plc};

    justify-content: space-between;
    align-items: center;

    :first-child {
        border-top: 1px solid ${({ theme }) => theme.plc};
    }

    &:hover {
        background: rgba(37, 37, 37, 0.1);
    }
`;

export const StyledUserItemLeft = styled(Wrapper)`
    align-items: center;
`;

export const StyledUserItemAvatar = styled(Avatar)`
    margin-right: 20px;
`;

export const StyledUserItemText = styled(Typography)`
    font-size: 18px;
    cursor: default;
`;

export const StyledUserItemIcon = styled(Icon)`
    margin-right: 10px;
    cursor: pointer;
`;
