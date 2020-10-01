import gql from 'graphql-tag';
import { mockedEmojis } from './data';

const FETCH_EMOJI = gql`
    query Emojies($first: Int!, $after: Int!) {
        emojies(first: $first, after: $after)
    }
`;
const mocks = [
    {
        request: {
            query: FETCH_EMOJI,
            variables: { first: 10, after: 0 },
        },
        result: {
            data: {
                emojies: mockedEmojis(),
            },
        },
    },
];

export default mocks;
