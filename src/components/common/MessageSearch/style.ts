import styled from 'styled-components';
import { Button, TextField, Wrapper } from 'components/UI';

export const StyledMessageSearchWrapper = styled(Wrapper)`
    max-width: 976px;
    padding: 0 20px;
`;

export const StyledMessageSearchTextField = styled(TextField)`
    margin-right: 20px;
    width: calc(100% - 140px);
    & > input {
        width: calc(100% - 20px);
        padding: 7px 10px;
    }
`;

export const StyledMessageSearchCancelButton = styled(Button)``;
