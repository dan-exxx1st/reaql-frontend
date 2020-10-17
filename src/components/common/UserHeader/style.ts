import { Avatar, Circle } from 'components/UI';
import { FC } from 'react';
import styled from 'styled-components';

export const StyledUserHeader = (UserHeader: FC) => styled(UserHeader)`
    max-width: 416px;
    border-right: 1px solid ${({ theme }) => theme.gc};
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
