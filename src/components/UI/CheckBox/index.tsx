import React, { FC } from 'react';
import { ICheckBoxProps } from 'lib/types/components/UI';

import {
    StyledCheckBoxInput,
    StyledCheckBoxLabel,
    StyledCheckBoxSpan,
    StyledCheckBoxText,
    StyledCheckBoxWrapper,
} from './style';

const CheckBox: FC<ICheckBoxProps> = (props) => {
    const { text, onClick } = props;

    return (
        <StyledCheckBoxWrapper>
            <StyledCheckBoxLabel>
                <StyledCheckBoxInput type="checkbox" defaultChecked={false} />
                <StyledCheckBoxSpan onClick={onClick}></StyledCheckBoxSpan>
            </StyledCheckBoxLabel>
            {text ? (
                <StyledCheckBoxText variant="body2">{text}</StyledCheckBoxText>
            ) : null}
        </StyledCheckBoxWrapper>
    );
};

export default CheckBox;
