type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type DefaultAligns = 'flex-start' | 'flex-end' | 'center' | 'inherit';

type ExtenderAligns = 'space-between' | 'space-around' | DefaultAligns;

type JustifyContentType = ExtenderAligns;
type AlignContentType = ExtenderAligns;

type AlignItemsType = DefaultAligns;

type FlexDirectionType =
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | 'inherit';

export interface IWrapperProps {
    flexDirection?: FlexDirectionType;
    justifyContent?: JustifyContentType;
    alignContent?: AlignContentType;
    alignItems?: AlignItemsType;
    flexWrap?: FlexWrap;
    className?: string;
    margin?: string;
    width?: string;
    height?: string;
    padding?: string;
    onClick?: () => void;
}
