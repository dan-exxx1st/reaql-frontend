import styled from 'styled-components';
import { Circle, Wrapper } from 'components/UI';

export const StyledContactsItemAvatarWrapper = styled(Wrapper)`
    margin-right: 20px;
`;

export const StyledContactsItemBottomLine = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gc};
    margin-top: 15px;
`;

export const StyledContactsItemCircle = styled(Circle)`
    width: 20px;
    height: 20px;
`;

export default styled(Wrapper)`
    width: 420px;
    padding-top: 15px;
    cursor: pointer;

    &:hover {
        background: rgba(164, 226, 255, 0.1);
    }
`;
