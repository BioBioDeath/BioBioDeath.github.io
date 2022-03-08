import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
import { Header } from './components/Header';

import '@fontsource/lobster';
import Scene from './components/Scene';
import React from 'react';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'lobster',
      button: {
        textTransform: 'lowercase',
      },
    },
    palette: {
      primary: {
        main: '#fff',
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            padding: 4,
          },
        },
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      <React.Suspense fallback={null}>
        <Scene>
        </Scene>
      </React.Suspense>
    </Box>
  );
}

export default App;
