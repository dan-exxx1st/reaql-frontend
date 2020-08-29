import styled from 'styled-components';

export const StyledTextField = (
    TextField: React.FC<NTextField.IProps>
) => styled(TextField)`
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;
    border: ${({ theme, color }) =>
        `1px solid ${color === 'primary' ? theme.pc : theme.sc}`};
    border-radius: 5px;
    outline: none;
    color: ${({ theme, color }) =>
        color === 'primary' ? theme.dc : theme.dsc};
    ${({ fieldSize }) => {
        let fontSize, fontWeight, lineHeight, letterSpacing, height: string;

        switch (fieldSize) {
            case 'small': {
                fontSize = '12px';
                fontWeight = 'normal';
                lineHeight = '14px';
                letterSpacing = '0.4px';
                height = '30px';
                break;
            }

            case 'large': {
                fontSize = '16px';
                fontWeight = 'normal';
                lineHeight = '19px';
                letterSpacing = '0.5px';
                height = '40px';
                break;
            }

            default: {
                fontSize = '14px';
                fontWeight = 'normal';
                lineHeight = '16px';
                letterSpacing = '0.25px';
                height = '35px';
            }
        }

        return `font-size:${fontSize}; 
        font-weight:${fontWeight}; 
        line-height:${lineHeight}; 
        letter-spacing:${letterSpacing}; 
        height:${height}`;
    }};
`;
