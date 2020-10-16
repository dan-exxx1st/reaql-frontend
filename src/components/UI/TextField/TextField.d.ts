declare namespace NTextField {
    import { ColorType, IconName } from 'lib/types';
    interface IProps {
        onChange?: (text: string) => void;
        value?: string;
        className?: string;
        fieldSize: 'small' | 'medium' | 'large';
        color: ColorType;
        icon?: IconName;
        width?: string;
        height?: string;
        wrapperWidth?: string;
        placeholder?: string;
    }
}
