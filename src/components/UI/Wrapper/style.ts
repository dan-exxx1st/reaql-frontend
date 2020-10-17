import styled from 'styled-components';
import { IWrapperProps } from 'lib/types/components/UI';

export const StyledWrapper = styled.div<IWrapperProps>`
    padding: ${({ padding }) => (padding ? padding : 0)};
    margin: ${({ margin }) => (margin ? margin : 0)};
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : 'flex-start'};
    align-content: ${({ alignContent }) =>
        alignContent ? alignContent : 'flex-start'};
    align-items: ${({ alignItems }) =>
        alignItems ? alignItems : 'flex-start'};
    width: ${({ width }) => (width ? width : 'auto')};
    height: ${({ height }) => (height ? height : 'auto')};
`;
