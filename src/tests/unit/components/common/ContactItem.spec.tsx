import React from 'react';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

import { ContactItem } from 'components/common';
import {
    ContactItemDataWithAvatar,
    ContactItemDataWithReadMessaage,
    ContactItemDataWithoutAvatar,
    ContactItemDataWithoutLastMessageDate,
} from 'tests/__mocks__/data/unit/ContactItem';

describe('<ContactItem />', () => {
    describe('Snapshots', () => {
        it('ContactItem with avatar and with sended message', () => {
            const wrapper = mountWithTheme(
                <ContactItem {...ContactItemDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('ContactItem without avatar and with recived message', () => {
            const wrapper = mountWithTheme(
                <ContactItem {...ContactItemDataWithoutAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('ContactItem without avatar and with readed message', () => {
            const wrapper = mountWithTheme(
                <ContactItem {...ContactItemDataWithReadMessaage} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('ContactItem without avatar and with readed message', () => {
            const wrapper = mountWithTheme(
                <ContactItem {...ContactItemDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('ContactItem without last_message', () => {
            const wrapper = mountWithTheme(
                <ContactItem {...ContactItemDataWithoutLastMessageDate} />
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should render circle component if component have unread_message', () => {
        const wrapper = shallowWithTheme(
            <ContactItem {...ContactItemDataWithAvatar} />
        );

        expect(wrapper.dive().find('ContactItem').props().name).toEqual(
            ContactItemDataWithAvatar.name
        );
    });
});
