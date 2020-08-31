import styled from 'styled-components';

export const StyledEmoji = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px;

    &:nth-child(7n) {
        margin-right: 0;
    }
`;
