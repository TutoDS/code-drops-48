import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import theme from 'assets/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
