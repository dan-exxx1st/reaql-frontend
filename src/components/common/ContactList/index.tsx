import React, { FC } from 'react';

import { IContactListProps } from 'lib/types/components/common';

import { StyledContactListWrapper, StyledContactListItem } from './style';

const ContactList: FC<IContactListProps> = ({ contacts }) => {
    return (
        <StyledContactListWrapper>
            {contacts &&
                contacts.map((contact) => (
                    <StyledContactListItem key={contact.id} {...contact} />
                ))}
        </StyledContactListWrapper>
    );
};

export default ContactList;
