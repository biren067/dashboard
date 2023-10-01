import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
    const [theme, colorMode] = useMode();
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Header/>
    <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  ) 
}
