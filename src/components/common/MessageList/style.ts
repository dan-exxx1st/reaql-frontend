import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { MessageItem } from '..';

export const StyledMessageListWrapper = styled(Wrapper)`
    background: ${({ theme }) => theme.wc};
    border-radius: 3px;
    width: 100%;
    flex-direction: column-reverse;
    overflow-y: auto;

    margin-bottom: 20px;

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.wc};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: ${({ theme }) => theme.gc};
        height: 100px;
    }

    ::-webkit-scrollbar {
        width: 7px;
    }
`;

export const StyledMessageListItem = styled(MessageItem)`
    margin: 10px;
`;

export const StyledMessagesWrapper = styled.div<any>`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%;
`;
