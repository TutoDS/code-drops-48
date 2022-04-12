import { extendTheme } from '@chakra-ui/react';
import { colors } from './partials/colors';
import { config } from './partials/config';
import { fonts } from './partials/fonts';
import { fontSizes } from './partials/fontSizes';
import { fontWeights } from './partials/fontWeights';
import { radii } from './partials/radii';

// Extend Theme using partials
const theme = extendTheme({
	config,
	colors,
	fonts,
	fontWeights,
	radii,
});

export default theme;
