declare namespace NTypography {
    import { KeyStringType, ColorType } from 'lib/types';
    import themes from 'config/styled';
    import color from 'config/styled/colors';

    type TVariant =
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body1'
        | 'body2'
        | 'caption1'
        | 'caption2';

    type TComponent =
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'span'
        | 'p'
        | 'div';

    interface IProps {
        className?: string;
        variant: TVariant;
        component?: TComponent;
        color?: typeof colors;
        theme: typeof themes;
    }
}
