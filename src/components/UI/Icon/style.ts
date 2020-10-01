import styled from 'styled-components';

export const StyledIcons = styled.img`
    width: ${({ width }) => (width ? width : '40px')};
    height: ${({ height }) => (height ? height : '40px')};
    outline: none;
    user-select: none;
    padding: 0;
    margin: 0;
`;
