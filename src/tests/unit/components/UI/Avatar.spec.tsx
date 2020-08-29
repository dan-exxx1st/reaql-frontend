import React from 'react';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

import { Avatar } from 'components/UI';
import { AvatarMock } from 'tests/__mocks__/Avatar';

describe('<Avatar />', () => {
	describe('Snapshots', () => {
		it('Avatar without a image to match snapshot', () => {
			const wrapper = mountWithTheme(
				<Avatar alt="Avatar without image" />
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Avatar with a image to match snapshot', () => {
			const wrapper = shallowWithTheme(
				<Avatar src={AvatarMock} alt="Avatar without image" />
			);

			expect(wrapper).toMatchSnapshot();
		});
	});
});
