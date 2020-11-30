import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { MessageItem } from '..';

export const StyledMessageListWrapper = styled(Wrapper)`
    flex-direction: column-reverse;
`;

export const StyledMessageListItem = styled(MessageItem)`
    margin-bottom: 20px;
`;
