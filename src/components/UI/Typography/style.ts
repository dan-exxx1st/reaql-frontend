import { FC } from 'react';
import styled from 'styled-components';
import { ITypographyProps } from 'lib/types/components/UI';

export default (Typography: FC<ITypographyProps>) => styled(Typography)`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ variant, theme }: ITypographyProps) =>
        theme.fontWeights[variant]};
    font-size: ${({ variant, theme }: ITypographyProps) =>
        theme.fontSizes[variant]};
    letter-spacing: ${({ variant, theme }: ITypographyProps) =>
        theme.letterSpacing[variant]};
    line-height: ${({ variant, theme }: ITypographyProps) => {
        const { lineHeight } = theme;
        return lineHeight[variant];
    }};
    color: ${({ theme, color }) => {
        return color ? theme[color] : '#000000';
    }};
    margin: 0;
`;
