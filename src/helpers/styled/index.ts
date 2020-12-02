import colorTheme from './colors';
import fontTheme from './fonts';

export { colorTheme, fontTheme };

const effects = {
    formBoxShadow: '5px 5px 15px rgba(37, 37, 37, 0.1)',
};

export default {
    ...colorTheme,
    ...fontTheme,
    ...effects,
};
