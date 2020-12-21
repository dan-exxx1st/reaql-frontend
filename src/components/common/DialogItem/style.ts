import styled from 'styled-components';
import { Circle, Wrapper } from 'components/UI';

export const StyledDialogItemAvatarWrapper = styled(Wrapper)`
    margin-right: 20px;
`;

export const StyledDialogItemCircle = styled(Circle)`
    width: 20px;
    height: 20px;
`;

export const StyledDialogItemRightWrapper = styled(Wrapper)``;

export default styled(Wrapper)`
    width: calc(100% - 40px);
    padding: 12.5px 20px;
    cursor: pointer;

    border-bottom: 1px solid ${({ theme }) => theme.gc};

    &:hover {
        background: rgba(164, 226, 255, 0.1);
    }
`;
