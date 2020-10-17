import React, { FC } from 'react';
import { StyledSkeletonLoader } from './style';
import { ISkeletonLoaderProps } from 'lib/types/components/UI';

const SkeletonLoader: FC<ISkeletonLoaderProps> = ({ ...props }) => {
    return <StyledSkeletonLoader {...props} />;
};

export default SkeletonLoader;
