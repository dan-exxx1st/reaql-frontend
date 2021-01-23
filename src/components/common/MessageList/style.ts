import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { MessageItem } from '..';

export const StyledMessageListWrapper = styled(Wrapper)`
    flex-direction: column-reverse;
    overflow-y: scroll;
    width: 100%;
    padding-bottom: 10px;
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
    margin-bottom: 20px;
`;
