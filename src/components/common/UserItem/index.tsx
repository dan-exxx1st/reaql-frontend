import React, { FC } from 'react';
import {
    StyledUserItemAvatar,
    StyledUserItemText,
    StyledUserItemWrapper,
    StyledUserItemLeft,
    StyledUserItemIcon,
} from './style';

interface IProps {
    id: string;
    name: string;
    surname: string;
    avatar?: string;
    onClick?: (id: string) => void;
}

const UserItem: FC<IProps> = (props) => {
    const { id, name, surname, avatar, onClick } = props;
    return (
        <StyledUserItemWrapper>
            <StyledUserItemLeft>
                <StyledUserItemAvatar src={avatar} alt="name" />
                <StyledUserItemText variant="body1">
                    {name} {surname}
                </StyledUserItemText>
            </StyledUserItemLeft>
            <StyledUserItemIcon
                onClick={() => (onClick ? onClick(id) : null)}
                iconName="bluePlus"
            />
        </StyledUserItemWrapper>
    );
};
export default UserItem;
