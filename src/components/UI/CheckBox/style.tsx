import styled from 'styled-components';

import { Wrapper, Typography } from '..';

export const StyledCheckBoxWrapper = styled(Wrapper)`
    align-content: center;
`;

export const StyledCheckBoxText = styled(Typography)`
    color: ${({ theme }) => theme.dsc};
`;

export const StyledCheckBoxLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    &:hover input ~ span {
        background-color: ${({ theme }) => theme.wc};
    }

    & > input:checked ~ span:after {
        display: block;
    }

    & > span:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid ${({ theme }) => theme.pc};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export const StyledCheckBoxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const StyledCheckBoxSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${({ theme }) => theme.plc};
    border-radius: 2px;

    &:after {
        content: '';
        position: absolute;
        display: none;
    }
`;
