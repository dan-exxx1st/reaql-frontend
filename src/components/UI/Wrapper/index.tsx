import React, { FC } from 'react';
import { StyledWrapper } from './style';

const Wrapper: FC<NWrapper.IProps> = ({ children, ...otherProps }) => {
	return <StyledWrapper {...otherProps}>{children}</StyledWrapper>;
};

export default Wrapper;
