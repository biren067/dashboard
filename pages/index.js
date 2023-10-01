import Image from 'next/image'
import HomePage from '@/components/HomePage'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../themes'

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage/>
              </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
