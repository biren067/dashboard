import Image from 'next/image'
import HomePage from '@/components/HomePage'
import MainPage from '@/components/MainPage'
// import Testing from '@/components/Testing'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../themes'
// import MovieTable from '@/components/MovieTable'

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <>
    {/* <ColorModeContext.Provider value={colorMode}> */}
      {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        {/* <HomePage/> */}
        {/* <MovieTable/> */}
        {/* bond */}
        <MainPage/>
        {/* </ThemeProvider> */}
    {/* </ColorModeContext.Provider> */}
    </>
  )
}
