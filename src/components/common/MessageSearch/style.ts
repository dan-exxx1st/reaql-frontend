import styled from 'styled-components';
import { Button, TextField, Wrapper } from 'components/UI';

export const StyledMessageSearchWrapper = styled(Wrapper)`
    width: 100%;
    max-width: 976px;
    justify-content: space-between;
`;

export const StyledMessageSearchTextField = styled(TextField)`
    margin-right: 20px;
    width: calc(100% - 120px);
    height: 40px;

    & > input {
        width: calc(100% - 20px);
        padding: 7px 10px;
    }
`;

export const StyledMessageSearchCancelButton = styled(Button)``;
