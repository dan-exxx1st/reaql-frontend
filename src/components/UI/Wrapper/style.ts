import styled from 'styled-components';

export const StyledWrapper = styled.div<NWrapper.IProps>`
    padding: 0;
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : 'flex-start'};
    align-content: ${({ alignContent }) =>
        alignContent ? alignContent : 'flex-start'};
    align-items: ${({ alignItems }) =>
        alignItems ? alignItems : 'flex-start'};
    margin: ${({ margin }) => (margin ? margin : 0)};
    width: ${({ width }) => (width ? width : 'auto')};
    height: ${({ height }) => (height ? height : 'auto')};
`;
