import styled from 'styled-components';
import { IButtonProps } from 'lib/types/components/UI';

export const StyledButton = (Button: React.FC<IButtonProps>) => styled(Button)`
    border-radius: 5px;
    outline: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    padding: 7px 26px;
    cursor: pointer;
    max-height: 50px;

    ${({ color, theme, variant }: IButtonProps) => {
        if (color === 'primary') {
            const primaryColor = theme.pc;
            if (variant === 'filled') {
                return {
                    background: primaryColor,
                    color: theme.wc,
                };
            }
            if (variant === 'outlined') {
                return {
                    border: `1px solid ${primaryColor}`,
                    background: 'none',
                    color: primaryColor,
                };
            }
        }
        if (color === 'secondary') {
            const secondaryColor = theme.sc;
            const darkGrayColor = theme.dgc;
            if (variant === 'filled') {
                return {
                    background: secondaryColor,
                    color: darkGrayColor,
                };
            }
            if (variant === 'outlined') {
                return {
                    border: `1px solid ${secondaryColor}`,
                    color: darkGrayColor,
                    background: 'none',
                };
            }
        }
    }};

    &:hover {
        ${({ color }: IButtonProps) => {
            if (color === 'primary') {
                return {
                    boxShadow: '1px 1px 10px rgb(10, 10, 10, 0.25)',
                };
            }
            if (color === 'secondary') {
                return {
                    boxShadow: '1px 1px 10px rgb(10, 10, 10, 0.1)',
                };
            }
        }}
    }
`;
