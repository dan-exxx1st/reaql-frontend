import React from 'react';
import Typography from '.';
import { mountWithTheme, shallowWithTheme } from 'tests/helpers/withTheme';

describe('<Typography />', () => {
	it('Typography variant body-2 to match snapshot', () => {
		const wrapper = mountWithTheme(
			<Typography variant="body2">Body 2 to match snapshot</Typography>,
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render passed text', () => {
		const bodyTwoText = 'Body 2 text';
		const wrapper = shallowWithTheme(
			<Typography variant="body2">{bodyTwoText}</Typography>,
		);
		expect(wrapper.childAt(0).props().children).toEqual(bodyTwoText);
	});
});
