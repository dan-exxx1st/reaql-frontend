import React, { FC } from 'react';
import { useLoaded } from 'config/helpers';
import { Icon, SkeletonLoader } from '..';
import { StyledImage, StyledAvatar } from './style';

const Avatar: FC<NAvatar.IProps> = ({ src, alt }) => {
    let children = null;
    const loaded = useLoaded({ src });
    const hasImgNotFailing = src && loaded !== 'error';
    if (hasImgNotFailing) {
        children =
            loaded === 'loaded' ? (
                <StyledImage src={src} alt={alt} loading="lazy" />
            ) : (
                <SkeletonLoader variant="avatar" />
            );
    } else {
        children = <Icon iconName="person" />;
    }
    return <>{children}</>;
};

export default StyledAvatar(Avatar);
