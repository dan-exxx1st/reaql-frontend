import React from 'react';

import {
    mountWithApolloAndStyled,
    shallowWithApolloAndStyled,
} from 'tests/helpers/withApollo';

import { DialogItem } from 'components/common';
import {
    DialogItemDataWithAvatar,
    DialogItemDataWithReadMessaage,
    DialogItemDataWithoutAvatar,
    DialogItemDataWithoutLastMessageDate,
} from 'tests/__mocks__/data/unit/DialogItem';

describe('<DialogItem />', () => {
    it('stub', (done) => done());
    // describe('Snapshots', () => {
    //     it('DialogItem with avatar and with sended message', () => {
    //         const wrapper = mountWithApolloAndStyled(
    //             <DialogItem {...DialogItemDataWithAvatar} />
    //         );
    //         expect(wrapper).toMatchSnapshot();
    //     });
    //     it('DialogItem without avatar and with recived message', () => {
    //         const wrapper = mountWithApolloAndStyled(
    //             <DialogItem {...DialogItemDataWithoutAvatar} />
    //         );
    //         expect(wrapper).toMatchSnapshot();
    //     });
    //     it('DialogItem without avatar and with readed message', () => {
    //         const wrapper = mountWithApolloAndStyled(
    //             <DialogItem {...DialogItemDataWithReadMessaage} />
    //         );
    //         expect(wrapper).toMatchSnapshot();
    //     });
    //     it('DialogItem without avatar and with readed message', () => {
    //         const wrapper = mountWithApolloAndStyled(
    //             <DialogItem {...DialogItemDataWithAvatar} />
    //         );
    //         expect(wrapper).toMatchSnapshot();
    //     });
    //     it('DialogItem without last_message', () => {
    //         const wrapper = mountWithApolloAndStyled(
    //             <DialogItem {...DialogItemDataWithoutLastMessageDate} />
    //         );
    //         expect(wrapper).toMatchSnapshot();
    //     });
    // });
    // it('Should render circle component if component have unread_message', () => {
    //     const wrapper = shallowWithApolloAndStyled(
    //         <DialogItem {...DialogItemDataWithAvatar} />
    //     );
    //     expect(wrapper.dive().find('DialogItem').props().name).toEqual(
    //         DialogItemDataWithAvatar.name
    //     );
    // });
});
