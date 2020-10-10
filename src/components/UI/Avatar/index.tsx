import React, { FC } from 'react';
import { useLoaded } from 'config/helpers';
import { Icon, SkeletonLoader } from '..';
import { StyledImage, StyledAvatar } from './style';

const Avatar: FC<NAvatar.IProps> = ({ src, alt, className = '' }) => {
    let children = null;
    const loaded = useLoaded({ src });
    const hasImgNotFailing = src && loaded !== 'error';
    if (hasImgNotFailing) {
        children =
            loaded === 'loaded' ? (
                <StyledImage
                    className={className}
                    src={src}
                    alt={alt}
                    loading="lazy"
                />
            ) : (
                <SkeletonLoader className={className} variant="avatar" />
            );
    } else {
        children = <Icon className={className} iconName="person" />;
    }
    return <>{children}</>;
};

export default StyledAvatar(Avatar);
