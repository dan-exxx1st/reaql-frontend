import React, { FC } from 'react';
import styled from 'styled-components';
import { KeyStringType } from 'lib/types';

const DefaultVariantMapping: KeyStringType = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    caption1: 'p',
    caption2: 'p',
};

const Typography: FC<NTypography.IProps> = ({
    className = '',
    children,
    component,
    variant,
}) => {
    const Component: any = component || DefaultVariantMapping[variant];

    return <Component className={className}>{children}</Component>;
};

export default styled(Typography)`
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
