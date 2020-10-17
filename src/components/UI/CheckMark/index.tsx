import React, { FC } from 'react';
import StyledCheckMarks from './style';
import { ICheckMarkProps } from 'lib/types/components/UI';

const CheckMarks: FC<ICheckMarkProps> = (props) => {
    return (
        <StyledCheckMarks {...props}>
            <path d="M0 7.58495L4.8086 13L6.02151 11.6244L1.22151 6.21908L0 7.58495ZM18.7785 0L9.67742 10.2586L6.09893 6.21908L4.86882 7.58495L9.67742 13L20 1.37556L18.7785 0ZM15.1312 1.37556L13.9183 0L8.45591 6.15127L9.67742 7.51714L15.1312 1.37556Z" />
        </StyledCheckMarks>
    );
};

export default CheckMarks;
