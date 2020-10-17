import styled from 'styled-components';
import { IAvatarProps } from 'lib/types/components/UI';

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const StyledAvatar = (Avatar: React.FC<IAvatarProps>) => styled(Avatar)`
    display: flex;

    width: 40px;
    height: 40px;
`;
