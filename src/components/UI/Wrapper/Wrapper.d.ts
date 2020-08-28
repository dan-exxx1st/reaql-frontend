declare namespace NWrapper {
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

	interface IProps {
		flexDirection?: FlexDirectionType;
		justifyContent?: JustifyContentType;
		alignContent?: AlignContentType;
		alignItems?: AlignItemsType;
		flexWrap?: FlexWrap;
		className?: string;
		margin?: string;
		width?: string;
		height?: string;
	}
}
