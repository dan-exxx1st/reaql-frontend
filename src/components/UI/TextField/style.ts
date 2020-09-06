import styled from 'styled-components';

export const StyledTextField = (
    TextField: React.FC<NTextField.IProps>
) => styled(TextField)`
    word-break: break-all;
    user-select: none;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    border: ${({ theme, color }) =>
        `1px solid ${color === 'primary' ? theme.pc : theme.sc}`};
    border-radius: 5px;
    outline: none;
    color: ${({ theme, color }) =>
        color === 'primary' ? theme.dc : theme.dsc};

    cursor: text;

    ${({ fieldSize, editable }) => {
        let fontSize, fontWeight, lineHeight, letterSpacing, width: string;

        switch (fieldSize) {
            case 'small': {
                fontSize = '12px';
                fontWeight = 'normal';
                lineHeight = '14px';
                letterSpacing = '0.4px';
                width = '170px';
                break;
            }

            case 'large': {
                fontSize = '16px';
                fontWeight = 'normal';
                lineHeight = '19px';
                letterSpacing = '0.5px';
                width = '220px';
                break;
            }

            default: {
                fontSize = '14px';
                fontWeight = 'normal';
                lineHeight = '16px';
                letterSpacing = '0.25px';
                width = '190px';
            }
        }

        if (!editable) {
            width = 'auto';
        }

        return `
        font-size:${fontSize}; 
        font-weight:${fontWeight}; 
        line-height:${lineHeight}; 
        letter-spacing:${letterSpacing}; 
        width:${width};
        `;
    }};

    & > img {
        vertical-align: middle;
    }
`;
