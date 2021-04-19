import { ISpinnerProps } from 'lib/types/components/UI';
import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  from {
            transform: rotate(0deg);
  }
  to {
            transform: rotate(359deg);
  }
`;

export const StyledSpinner = styled.div<ISpinnerProps>`
    display: flex;

    height: ${({ size }) => size || '30px'};
    width: ${({ size }) => size || '30px'};
    border: 2px solid transparent;
    border-top-color: ${({ theme }) => theme.pc};
    border-radius: 50%;
    animation: ${SpinnerAnimation} 2s linear infinite;

    &:before {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 2px solid transparent;
        border-radius: 50%;
        border-top-color: #ffa700;
        animation: ${SpinnerAnimation} 3s linear infinite;
    }
`;
