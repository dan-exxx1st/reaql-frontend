import React, { FC } from 'react';
import PersonIcon from 'assets/images/icons/Person.svg';
import { StyledIcons } from './style';

const Icon: FC<NIcon.IProps> = ({ iconName }) => {
	let srcIcon = '';
	switch (iconName) {
		case 'person': {
			srcIcon = PersonIcon;
			break;
		}
	}

	return <StyledIcons src={srcIcon} alt="Icon component" />;
};

export default Icon;
