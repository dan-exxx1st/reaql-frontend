import styled from 'styled-components';

import { Typography, Wrapper } from 'components/UI';
import { ISystemMessageProps } from 'lib/types/components/UI';

export const StyledSystemMessageWrapper = styled(Wrapper)<ISystemMessageProps>`
    padding: 15px;
    justify-content: center;

    box-shadow: 0px 3px 7px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 250px;

    ${({ variant }) => {
        let color = '';
        if (variant === 'success') color = '#4caf50';
        if (variant === 'error') color = '#f44336';
        if (variant === 'warning') color = '#ff9800';
        if (variant === 'info') color = '#2196f3';

        return `background: ${color}`;
    }};
`;

export const StyledSystemMessageText = styled(Typography)`
    color: ${({ theme }) => theme.wc};
    font-weight: 500;
    letter-spacing: 1.1px;
`;
