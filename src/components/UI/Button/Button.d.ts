declare namespace NButton {
    import { MouseEventHandler } from 'react';
    import Theme from 'config/styled';
    import { ColorType } from 'lib/types';
    interface IProps {
        className?: string;
        theme: typeof Theme;
        onClick?: MouseEventHandler;
        variant: 'filled' | 'outlined';
        color: ColorType;
    }
}
