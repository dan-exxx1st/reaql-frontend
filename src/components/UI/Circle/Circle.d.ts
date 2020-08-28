declare namespace NCircle {
	import { IconName, ColorType } from 'lib/types';
	interface IProps {
		color: ColorType;
		iconName?: IconName;
		text?: string | number;
		width?: string;
		height?: string;
	}
}
