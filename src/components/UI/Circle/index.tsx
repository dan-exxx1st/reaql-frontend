import React, { FC } from 'react';
import Icon from '../Icon';
import { Typography } from '..';
import { StyledCircle } from './style';

const Circle: FC<NCircle.IProps> = ({ iconName, text, ...otherProps }) => {
	if (iconName) {
		return <Icon iconName={iconName} />;
	} else if (text) {
		return (
			<StyledCircle
				justifyContent="center"
				alignItems="center"
				{...otherProps}
			>
				<Typography variant="caption2">{text}</Typography>
			</StyledCircle>
		);
	}

	return (
		<StyledCircle {...otherProps}>No icon or text in Circle!</StyledCircle>
	);
};

export default Circle;
