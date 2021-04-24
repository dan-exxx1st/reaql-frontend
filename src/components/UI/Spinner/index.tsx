import React, { FC } from 'react';
import { StyledSpinner } from './style';
import { ISpinnerProps } from 'lib/types/components/UI';

const Spinner: FC<ISpinnerProps> = (props) => {
    return <StyledSpinner {...props} />;
};

export default Spinner;
