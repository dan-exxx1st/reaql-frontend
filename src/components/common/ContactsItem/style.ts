import styled from 'styled-components';
import { Wrapper } from 'components/UI';

export const AvatarWrapperStyled = styled(Wrapper)`
    margin-right: 20px;
`;

export const BottomLineStyled = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gc};
    margin-top: 15px;
`;

export default styled(Wrapper)`
    width: 420px;
    padding-top: 15px;
    cursor: pointer;

    &:hover {
        background: rgba(164, 226, 255, 0.1);
    }
`;
