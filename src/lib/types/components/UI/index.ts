import { MouseEventHandler } from 'react';
import Theme from 'helpers/styled';
import { ColorType, IconName } from 'lib/types';
import { TypographyVariantType, TypographyComponentType } from 'lib/types/ui';

export interface IAvatarProps {
    src?: HTMLImageElement['src'];
    alt?: string;
    className?: string;
}

export interface IButtonProps {
    className?: string;
    theme: typeof Theme;
    onClick?: MouseEventHandler;
    variant: 'filled' | 'outlined';
    color: ColorType;
}

export interface ICheckMarkProps {
    isChecked: boolean;
    isDouble: boolean;
}

export interface ICircleProps {
    color: ColorType;
    iconName?: IconName;
    text?: string | number;
    width?: string;
    height?: string;
    cursor?: string;
    className?: string;
    onClick?: () => void;
}

export interface IIconProps {
    iconName: IconName;
    className?: string;
}

export interface ISkeletonLoaderProps {
    variant?: 'avatar' | 'block';
    width?: string;
    height?: string;
    className?: string;
}

export interface ITextFieldProps {
    onChange?: (value: string) => void;
    value?: string;
    className?: string;
    fieldSize: 'small' | 'medium' | 'large';
    color: ColorType;
    icon?: IconName;
    width?: string;
    height?: string;
    wrapperWidth?: string;
    placeholder?: string;
    type?: string;
}

export interface ITypographyProps {
    className?: string;
    variant: TypographyVariantType;
    component?: TypographyComponentType;
    color?: string;
    theme: typeof Theme;
}

export type { IWrapperProps } from './WrapperTypes';

export interface ICheckBoxProps {
    onClick?: () => void;
    text?: string;
}
