import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { MessageItem } from '..';

export const StyledMessageListWrapper = styled(Wrapper)`
    width: calc(100% - 45px);
    height: calc(100% - 110px);
    position: absolute;
    top: 20px;
    left: 20px;
    background: ${({ theme }) => theme.wc};
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 0;
    flex-direction: column-reverse;
`;

export const StyledMessageListItem = styled(MessageItem)`
    margin: 7.5px 0;
`;

export const StyledMessagesWrapper = styled(Wrapper)`
    flex-direction: column-reverse;
    overflow-y: scroll;
    justify-content: space-between;
    width: 100%;

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
