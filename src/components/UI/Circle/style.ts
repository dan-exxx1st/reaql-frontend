import styled from 'styled-components';
import { ICircleProps } from 'lib/types/components/UI';

import Wrapper from '../Wrapper';
import Icon from '../Icon';

export const StyledCircle = styled(Wrapper)<ICircleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    ${({ color, theme }) => {
        switch (color) {
            case 'primary': {
                return {
                    color: theme.wc,
                    background: theme.pc,
                };
            }
            case 'secondary': {
                return {
                    background: theme.sc,
                    color: theme.dgc,
                };
            }
        }
    }};
`;

export const StyledIcon = styled(Icon)`
    width: 17px;
    height: 17px;
`;
