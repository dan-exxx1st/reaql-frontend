import styled from 'styled-components';

export default styled.svg<NCheckMark.IProps>`
    fill: ${({ theme, isChecked }) => {
        return isChecked ? theme.pc : theme.dgc;
    }};
    width: 20px;
    height: 13px;
`;
