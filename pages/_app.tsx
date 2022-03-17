import '../styles/globals.css';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import type { AppProps } from 'next/app';
import '@fontsource/press-start-2p';

let theme = createTheme({
  palette: {
    primary: {
      main: '#f4f1bb',
    },
    secondary: {
      main: 'rgb(10,35,39)',
    },
  },
});

theme = responsiveFontSizes(theme);

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
