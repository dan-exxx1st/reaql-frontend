import styled from 'styled-components';

import { Avatar, Circle, Wrapper } from 'components/UI';

export const StyledUserHeader = styled(Wrapper)`
    width: calc(100% - 30px);
    max-width: 446px;
    padding: 15px;
`;

export const StyledAvatar = styled(Avatar)`
    margin-right: 30px;
`;

export const StyledCircle = styled(Circle)`
    cursor: pointer;
    margin-left: 25px;
    width: 30px;
    height: 30px;
`;
