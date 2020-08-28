import React, { FC } from 'react';
import { StyledSkeletonLoader } from './style';

const SkeletonLoader: FC<NSkeletonLoader.IProps> = ({ ...props }) => {
	return <StyledSkeletonLoader {...props} />;
};

export default SkeletonLoader;
