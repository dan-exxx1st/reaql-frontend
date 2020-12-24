import React, { FC } from 'react';
import { StyledSystemMessageText, StyledSystemMessageWrapper } from './style';

import { ISystemMessageProps } from 'lib/types/components/UI';

const SystemMessage: FC<ISystemMessageProps> = (props) => {
    const { children } = props;
    return (
        <StyledSystemMessageWrapper {...props}>
            <StyledSystemMessageText variant="body2">
                {children}
            </StyledSystemMessageText>
        </StyledSystemMessageWrapper>
    );
};

export default SystemMessage;
