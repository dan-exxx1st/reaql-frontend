import React, { FC } from 'react';
import { StyledIcons } from './style';

import PersonIcon from 'assets/images/icons/Person.svg';
import AnimalIcon from 'assets/images/icons/Animal.svg';
import FoodIcon from 'assets/images/icons/Food.svg';
import PeopleIcon from 'assets/images/icons/People.svg';
import SearchIcon from 'assets/images/icons/SearchIcon.svg';
import NewChatIcon from 'assets/images/icons/NewChat.svg';
import ThreeDotsIcon from 'assets/images/icons/ThreeDots.svg';

const Icon: FC<NIcon.IProps> = ({ iconName, ...otherProps }) => {
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

        case 'threeDots': {
            srcIcon = ThreeDotsIcon;
            break;
        }
    }

    return <StyledIcons src={srcIcon} alt="Icon component" {...otherProps} />;
};

export default Icon;
