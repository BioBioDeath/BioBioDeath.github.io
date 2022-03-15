import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { Header } from './components/Header';

import Scene from './components/Scene';
import React from 'react';
import theme from './Theme';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Text } from '@react-three/drei';
import Card from './components/Card';

export const INIT_CAMERA_POSITION = [0, 0, -15];
export const OCTAGON_DISTANCE = 35;
export const CLOSE_SIDE_DISTANCE = (OCTAGON_DISTANCE / 2) * Math.sqrt(2);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Header />
        <React.Suspense fallback={null}>
          <Canvas gl={{ alpha: false }} >
            <PerspectiveCamera makeDefault position={INIT_CAMERA_POSITION} target={[0, 0, -OCTAGON_DISTANCE]} />
            <Scene>
              <Card url='./assets/takeItSlow.png' />
              <Card url='./assets/meBeforeYou.png' />
              <Card url='./assets/WildWorld.png' />
            </Scene>
          </Canvas>
        </React.Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
