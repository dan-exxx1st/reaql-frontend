import { Avatar, Circle, Wrapper } from 'components/UI';
import styled from 'styled-components';

export const StyledDialogHeader = styled(Wrapper)`
    width: 100%;
    max-width: 976px;
    padding: 30px 20px;
`;

export const StyledAvatar = styled(Avatar)`
    margin-right: 20px;
`;

export const StyledCircle = styled(Circle)`
    width: 40px;
    height: 40px;
    background: rgba(230, 230, 230, 0.4);
    margin-left: 20px;
`;
