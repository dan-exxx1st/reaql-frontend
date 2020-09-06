import styled from 'styled-components';

interface IProps {
    margin?: string;
    width?: string;
}
export const StyledEmoji = styled.img<IProps>`
    width: ${({ width }) => (width ? width : '25px')};
    height: ${({ width }) => (width ? width : '25px')};
    cursor: pointer;
    margin: ${({ margin }) => (margin ? margin : '0 5px 5px 0')};
    border: none;
    outline: none;
    user-select: none;
    &:nth-child(7n) {
        margin-right: 0;
    }
    pointer-events: none;
`;
