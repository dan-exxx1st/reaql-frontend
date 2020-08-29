import React from 'react';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

import { DialogListItem } from 'components';
import { DialogListDataWithAvatar } from 'tests/__mocks__/data/unit/DialogListItem';

describe('<DialogListItem />', () => {
    describe('Snapshots', () => {
        it('DialogListItem with avatar and with sended message to match snapshot', () => {
            const wrapper = mountWithTheme(
                <DialogListItem {...DialogListDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('DialogListItem without avatar and with recived message to match snapshot', () => {
            const wrapper = mountWithTheme(
                <DialogListItem {...DialogListDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('DialogListItem without avatar and with readed message to match snapshot', () => {
            const wrapper = mountWithTheme(
                <DialogListItem {...DialogListDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('DialogListItem without avatar and with readed message to match snapshot', () => {
            const wrapper = mountWithTheme(
                <DialogListItem {...DialogListDataWithAvatar} />
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('Should render circle component if component have unread_message', () => {
        const wrapper = shallowWithTheme(
            <DialogListItem {...DialogListDataWithAvatar} />
        );

        expect(wrapper.dive().find('DialogListItem').props().name).toEqual(
            DialogListDataWithAvatar.name
        );
    });
});
