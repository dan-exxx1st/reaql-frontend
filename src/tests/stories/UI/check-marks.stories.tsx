import React from 'react';
import { CheckMark, Wrapper } from 'components/UI';
export default {
    title: 'UI/Check marks',
};

export const CheckMarkDouble = () => (
    <Wrapper>
        <Wrapper>
            <CheckMark isDouble={false} isActive={false} />
            <CheckMark isDouble={false} isActive={true} />
        </Wrapper>
    </Wrapper>
);
