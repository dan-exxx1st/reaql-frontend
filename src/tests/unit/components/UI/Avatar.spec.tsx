import React from 'react';
import { mountWithTheme } from 'tests/helpers/withTheme';

import Avatar from 'components/UI/Avatar';

describe('<Avatar />', () => {
    describe('Snapshots', () => {
        it('Avatar without a image', () => {
            const wrapper = mountWithTheme(
                <Avatar alt="Avatar without image" />
            );
            expect(wrapper).toMatchSnapshot();
        });

        it('Avatar with a image', () => {
            const wrapper = mountWithTheme(
                <Avatar
                    src="https://yandex.ru/images/search?text=foto&pos=3&img_url=https%3A%2F%2Fget.wallhere.com%2Fphoto%2F2700x1800-px-building-castle-forest-Hohenzollern-landscape-1077207.jpg&rpt=simage"
                    alt="Avatar without image"
                />
            );

            wrapper.update();
            expect(wrapper).toMatchSnapshot();
        });
    });
});
