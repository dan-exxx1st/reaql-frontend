import React from 'react';

import * as helpers from 'helpers';
import { renderWithTheme } from 'tests/helpers/withTheme';

import Avatar from 'components/UI/Avatar';

describe('<Avatar />', () => {
    describe('Snapshots', () => {
        it('Avatar without a image', () => {
            const {
                container: { firstChild },
            } = renderWithTheme(<Avatar alt="Avatar without image" />);
            expect(firstChild).toMatchSnapshot();
        });

        it('Avatar with a image', () => {
            (helpers as any).useLoaded = () => 'loaded';

            const {
                container: { firstChild },
            } = renderWithTheme(
                <Avatar
                    src="https://yandex.ru/images/search?text=foto&pos=3&img_url=https%3A%2F%2Fget.wallhere.com%2Fphoto%2F2700x1800-px-building-castle-forest-Hohenzollern-landscape-1077207.jpg&rpt=simage"
                    alt="Avatar with image"
                />
            );

            expect(firstChild).toMatchSnapshot();
        });
    });
});
