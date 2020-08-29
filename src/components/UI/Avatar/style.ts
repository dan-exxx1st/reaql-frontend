import styled from 'styled-components';

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const StyledAvatar = (Avatar: React.FC<NAvatar.IProps>) => styled(
    Avatar
)<NAvatar.IProps>`
    display: flex;

    width: 40px;
    height: 40px;
`;
