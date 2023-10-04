import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { AppProps } from 'next/app';
import Modal from 'react-modal';
import { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../themes'
// import { IdProvider } from '../path/to/IdContext';
import { IdProvider } from '@/context/IdContext';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  Modal.setAppElement('#__next'); // Use #__next, which is the default Next.js root element
}, []);
    //  const [theme, colorMode] = useMode();
      const [theme, colorMode] = useMode();
  return (
    // <>
    // {/* <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline /> */}
    //   <Header/>
    //   <Component {...pageProps} />
    //   <Footer/>
    //   {/* </ThemeProvider>
    // </ColorModeContext.Provider> */}
    // </>
    <>
    <IdProvider>
              <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
       <Component {...pageProps} />
      <Footer/>
        </ThemeProvider>
    </ColorModeContext.Provider>
    </IdProvider>

    </>
    
  ) 
}
