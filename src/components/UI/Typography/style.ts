import { FC } from 'react';
import styled from 'styled-components';

export default (Typography: FC<NTypography.IProps>) => styled(Typography)`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ variant, theme }: NTypography.IProps) =>
        theme.fontWeights[variant]};
    font-size: ${({ variant, theme }: NTypography.IProps) =>
        theme.fontSizes[variant]};
    letter-spacing: ${({ variant, theme }: NTypography.IProps) =>
        theme.letterSpacing[variant]};
    line-height: ${({ variant, theme }: NTypography.IProps) => {
        const { lineHeight } = theme;
        return lineHeight[variant];
    }};
    color: ${({ theme, color }) => {
        return color ? theme[color] : '#000000';
    }};
    margin: 0;
`;
