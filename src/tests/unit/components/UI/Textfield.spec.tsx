import React from 'react';
import { TextField } from 'components/UI';
import { mountWithTheme } from 'tests/helpers/withTheme';

describe('<TextField />', () => {
	describe('Snapshots', () => {
		it('Primary text field with large size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="primary"
					fieldSize="large"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Primary text field with medium size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="primary"
					fieldSize="medium"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Primary text field with small size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="primary"
					fieldSize="small"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Secondary text field with large size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="secondary"
					fieldSize="large"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Secondary text field with medium size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="secondary"
					fieldSize="medium"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
		it('Secondary text field with small size to match snapshot', () => {
			const wrapper = mountWithTheme(
				<TextField
					color="secondary"
					fieldSize="small"
					value="TextField snapshot"
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
	});

	it('Should change value in text field', () => {
		const changeValue = jest.fn();
		const wrapper = mountWithTheme(
			<TextField
				color="primary"
				fieldSize="small"
				onChange={changeValue}
			/>
		);
		wrapper.simulate('change');
		expect(changeValue).toBeCalled();
	});
});
