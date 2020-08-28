import styled from 'styled-components';

import { skeletonLoaderAvatarKeyFrames } from 'config/styled/animations';

export const StyledSkeletonLoader = styled.div<NSkeletonLoader.IProps>`
	${({ variant }) => {
		switch (variant) {
		case 'avatar': {
			return {
				width: '40px',
				height: '40px',
				borderRadius: '50%',
			};
		}

		default: {
			return {
				width: '100px',
				height: '20px',
			};
		}
		}
	}};

	background: #eee;
	background-image: linear-gradient(
		to right,
		#eee 0%,
		#ccc 40%,
		#ddd 40%,
		#eee 100%
	);
	background-repeat: no-repeat;
	animation: ${skeletonLoaderAvatarKeyFrames} 1s linear infinite forwards;
`;
