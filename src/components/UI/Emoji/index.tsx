import React, { FC } from 'react';
import { StyledEmoji } from './style';

interface IProps {
    emoji: string | null;
}

const Emoji: FC<IProps> = ({ emoji, ...otherProps }) => {
    return <StyledEmoji src={`${emoji}`} alt="Emoji icon" {...otherProps} />;
};

export default Emoji;
