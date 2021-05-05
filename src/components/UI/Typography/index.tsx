import React, { FC } from 'react';
import StyledTypography from './style';
import { KeyStringType } from 'lib/types';
import { ITypographyProps } from 'lib/types/components/UI';

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

const Typography: FC<ITypographyProps> = ({
    className,
    children,
    component,
    variant,
}) => {
    const Component =
        component || ((DefaultVariantMapping[variant] as unknown) as FC);

    return <Component className={className}>{children}</Component>;
};

export default StyledTypography(Typography);
