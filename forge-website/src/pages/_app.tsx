import type { AppProps } from 'next/app';
import '../styles/theme';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  return (
    <ThemeProvider theme={formtheme}>
       <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
    {/* <Navbar /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
    </ThemeProvider>
  )
}
