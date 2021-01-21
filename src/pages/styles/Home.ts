import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { DialogHeader, DialogTextField } from 'components/common';

export const StyledHomeWrapper = styled(Wrapper)`
    background: ${({ theme }) => theme.wc};
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    max-width: 1440px;
    width: 100%;
    height: calc(100vh - 40px);
    margin: 5px;
`;

//Dialog components styles

export const StyledHomeDialog = styled(Wrapper)`
    flex-direction: column;
    width: 100%;
`;

export const StyledHomeDialogHeader = styled(DialogHeader)`
    padding: 20px;
    width: calc(100% - 40px);
`;

export const StyledHomeDialogContentWrapper = styled(Wrapper)`
    flex-direction: column-reverse;
    background: ${({ theme }) => theme.lbc};
    width: calc(100% - 40px);
    height: calc(100vh - 160px);
    padding: 20px;
    position: relative;
`;

export const StyledHomeDialogMessageWrapper = styled(Wrapper)`
    width: calc(100% - 45px);
    height: calc(100% - 110px);
    position: absolute;
    top: 20px;
    left: 20px;
    background: ${({ theme }) => theme.wc};
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 0;
    flex-direction: column-reverse;
`;

export const StyledHomeDialogTextField = styled(DialogTextField)`
    width: 100%;
`;

export const StyledHomeSearchUserModalWrapper = styled(Wrapper)`
    position: absolute;
    background: rgba(85, 85, 85, 0.7);
    width: 100vw;
    height: 100vh;
    z-index: 1;
    justify-content: center;
    align-items: center;
`;
