import styled from 'styled-components';

import Wrapper from '../Wrapper';

export const StyledCircle = styled(Wrapper)<NCircle.IProps>`
    border-radius: 50%;
    width: ${({ width }) => (width ? width : '20px')};
    height: ${({ height }) => (height ? height : '20px')};
    cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
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
