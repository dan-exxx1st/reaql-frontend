import React from 'react';
import Circle from '.';
import { Wrapper } from '..';

export default {
	title: 'UI/Circle component',
};

export const DefaultCircle = () => (
	<Wrapper>
		<Circle text="3" color="primary" width="20px" height="20px" />
	</Wrapper>
);
