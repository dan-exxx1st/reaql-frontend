declare namespace NTextField {
    import { ColorType } from 'lib/types';
    interface IProps {
        onChange?: (text: string) => void;
        value?: string;
        className?: string;
        fieldSize: 'small' | 'medium' | 'large';
        color: ColorType;
        editable?: boolean;
    }
}
