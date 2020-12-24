import React, { FC } from 'react';
import { StyledIcons } from './style';
import { IIconProps } from 'lib/types/components/UI';

import PersonIcon from 'assets/images/icons/Person.svg';
import AnimalIcon from 'assets/images/icons/Animal.svg';
import FoodIcon from 'assets/images/icons/Food.svg';
import PeopleIcon from 'assets/images/icons/People.svg';
import SearchIcon from 'assets/images/icons/SearchIcon.svg';
import NewChatIcon from 'assets/images/icons/NewChat.svg';
import ThreeDotsWhiteIcon from 'assets/images/icons/ThreeDotsWhite.svg';
import ThreeDotsGreyIcon from 'assets/images/icons/ThreeDotsGray.svg';
import BluePlus from 'assets/images/icons/BluePlus.svg';

const Icon: FC<IIconProps> = ({ iconName, ...otherProps }) => {
    let srcIcon = '';
    switch (iconName) {
        case 'person': {
            srcIcon = PersonIcon;
            break;
        }
        case 'animal': {
            srcIcon = AnimalIcon;
            break;
        }
        case 'food': {
            srcIcon = FoodIcon;
            break;
        }

        case 'people': {
            srcIcon = PeopleIcon;
            break;
        }

        case 'search': {
            srcIcon = SearchIcon;
            break;
        }

        case 'newChat': {
            srcIcon = NewChatIcon;
            break;
        }

        case 'threeDotsWhite': {
            srcIcon = ThreeDotsWhiteIcon;
            break;
        }

        case 'threeDotsGrey': {
            srcIcon = ThreeDotsGreyIcon;
            break;
        }

        case 'bluePlus': {
            srcIcon = BluePlus;
            break;
        }
    }

    return <StyledIcons src={srcIcon} alt="Icon component" {...otherProps} />;
};

export default Icon;
