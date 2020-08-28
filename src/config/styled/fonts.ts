import { KeyStringType } from 'lib/types';

interface IFontSetting {
	ff: string;
	fontWeights: KeyStringType;
	fontSizes: KeyStringType;
	letterSpacing: KeyStringType;
	lineHeight: KeyStringType;
}

const fontSettings: IFontSetting = {
	ff: 'Roboto',

	fontWeights: {
		h1: '300',
		h2: '300',
		h3: 'normal',
		h4: 'normal',
		h5: 'normal',
		h6: '500',
		body1: 'normal',
		body2: 'normal',
		caption1: 'normal',
		caption2: 'bold',
	},

	fontSizes: {
		h1: '96px',
		h2: '60px',
		h3: '48px',
		h4: '34px',
		h5: '24px',
		h6: '20px',
		body1: '16px',
		body2: '14px;',
		caption1: '12px',
		caption2: '12px',
	},

	lineHeight: {
		h1: '112px',
		h2: '70px',
		h3: '56px',
		h4: '40px',
		h5: '28px',
		h6: '23px',
		body1: '19px',
		caption1: '14px',
		caption2: '14px',
	},

	letterSpacing: {
		h1: '-1.5px',
		h2: '-0.5px',
		h3: '0.25px',
		h6: '0.15px',
		body1: '0.5px',
		body2: '0.25px',
		caption1: '0.4px',
		caption2: '0.4px',
	},
};

export default fontSettings;
