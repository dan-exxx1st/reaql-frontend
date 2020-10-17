import styled from 'styled-components';
import { ICheckMarkProps } from 'lib/types/components/UI';

export default styled.svg<ICheckMarkProps>`
    fill: ${({ theme, isChecked }) => {
        return isChecked ? theme.pc : theme.dgc;
    }};
    width: 20px;
    height: 13px;
`;
