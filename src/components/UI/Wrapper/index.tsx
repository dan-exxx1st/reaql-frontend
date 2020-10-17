import React, { FC } from 'react';
import { StyledWrapper } from './style';
import { IWrapperProps } from 'lib/types/components/UI';

const Wrapper: FC<IWrapperProps> = ({ children, ...otherProps }) => {
    return <StyledWrapper {...otherProps}>{children}</StyledWrapper>;
};

export default Wrapper;
