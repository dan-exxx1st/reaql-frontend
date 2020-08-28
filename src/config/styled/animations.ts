import { keyframes } from 'styled-components';

const skeletonLoaderAvatarKeyFrames = keyframes`
    0% {
        background-position: -80px 0;
    }

    100% {
        background-position: 80px 0;
    }

`;

export { skeletonLoaderAvatarKeyFrames };
