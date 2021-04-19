import styled from 'styled-components';

import { Wrapper } from 'components/UI';
import { DialogTextField } from 'components/common';
import { DialogHeaderWithData } from 'components/data';

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

export const StyledHomeDialogHeader = styled(DialogHeaderWithData)`
    padding: 20px;
    width: calc(100% - 40px);
`;

export const StyledHomeDialogContentWrapper = styled(Wrapper)`
    flex-direction: column;
    background: ${({ theme }) => theme.lbc};
    width: calc(100% - 40px);
    height: calc(100vh - 160px);
    padding: 20px;
    position: relative;
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
