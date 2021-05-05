import styled from 'styled-components';
import { ITextFieldProps } from 'lib/types/components/UI';
import { IconName } from 'lib/types';

export const StyledWrapper = styled.div<{ withIcon?: IconName }>`
    position: ${({ withIcon }) => (withIcon ? 'relative' : 'static')};
`;

export const StyledTextField = styled.input<ITextFieldProps>`
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

    ${({ fieldSize, width, icon, height }) => {
        let fontSize,
            fontWeight,
            lineHeight,
            letterSpacing,
            customWidth: string;

        const customRightPadding = icon ? '40px' : '0',
            customHeight = height ? height : 'auto';

        switch (fieldSize) {
            case 'small': {
                fontSize = '12px';
                fontWeight = 'normal';
                lineHeight = '14px';
                letterSpacing = '0.4px';
                customWidth = '170px';
                break;
            }

            case 'large': {
                fontSize = '16px';
                fontWeight = 'normal';
                lineHeight = '19px';
                letterSpacing = '0.5px';
                customWidth = '220px';
                break;
            }

            default: {
                fontSize = '14px';
                fontWeight = 'normal';
                lineHeight = '16px';
                letterSpacing = '0.25px';
                customWidth = '190px';
            }
        }

        customWidth = width ? width : customWidth;

        return `
        font-size:${fontSize}; 
        font-weight:${fontWeight}; 
        line-height:${lineHeight}; 
        letter-spacing:${letterSpacing}; 
        width:${customWidth};
        height:${customHeight};
        padding-right:${customRightPadding};
        `;
    }};

    & ~ img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
`;
