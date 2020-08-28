import styled from 'styled-components';

import { Wrapper } from '..';

export const StyledCircle = styled(Wrapper)<NCircle.IProps>`
	border-radius: 50%;
	${({ color, theme }) => {
		switch (color) {
			case 'primary': {
				return {
					color: theme.lc,
					background: theme.pc,
				};
			}
			case 'secondary': {
				return {
					background: theme.sc,
					color: theme.dgc,
				};
			}
		}
	}};
`;
