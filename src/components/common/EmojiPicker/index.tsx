import React, { FC, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
    StyledEmojiPicker,
    StyledTypography,
    StyledEmojiWrapper,
} from './style';
import { IQuery, IQueryEmojiesArgs } from 'lib/graphql';
import { Emoji } from 'components/UI';

const EmojiPicker: FC = () => {
    const { data } = useQuery<IQuery, IQueryEmojiesArgs>(
        gql`
            query Emojies($first: Int!, $after: Int!) {
                emojies(first: $first, after: $after)
            }
        `,
        {
            variables: { first: 10, after: 0 },
        }
    );

    const [isContentAfter, setIsContentAfter] = useState(false);
    useEffect(() => {
        if (data && data?.emojies.length % 7 === 0) {
            setIsContentAfter(false);
        } else {
            setIsContentAfter(true);
        }
    });

    return (
        <StyledEmojiPicker>
            <StyledTypography variant="body1" color="sdc">
                Emoji
            </StyledTypography>
            <StyledEmojiWrapper
                justifyContent="space-between"
                flexWrap="wrap"
                isContentAfter={isContentAfter}
            >
                {data &&
                    data.emojies &&
                    data.emojies.map((emoji) => {
                        return <Emoji key={emoji} emoji={emoji} />;
                    })}
            </StyledEmojiWrapper>
        </StyledEmojiPicker>
    );
};

export default EmojiPicker;
