import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { Header } from './components/Header';

import Scene from './components/Scene';
import React from 'react';
import theme from './Theme';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Card from './components/Card';
import Mirrors from './components/Mirrors';

export const INIT_CAMERA_POSITION = [0, 0, -15];
export const OCTAGON_DISTANCE = 35;
export const CLOSE_SIDE_DISTANCE = (OCTAGON_DISTANCE / 2) * Math.sqrt(2);


function App() {
  const day = new Date().getDate();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Header />
        <React.Suspense fallback={null}>
          <Canvas gl={{ alpha: false }} >
            <PerspectiveCamera makeDefault position={INIT_CAMERA_POSITION} target={[0, 0, -OCTAGON_DISTANCE]} rotation={[0, 0, 0]} />
            <Scene>
              <Card url='./assets/WrittenSignedAndDotted.jpeg' title="Written, Signed, & Dotted" description={day >= 13 ? 'Released 5-13-22' : 'Releases 5-13-22'} link='https://distrokid.com/hyperfollow/seansharp/written-signed--dotted' />
              <Card url='./assets/WildWorld.png' title="Wild World" description='Released 3-18-22' link='https://distrokid.com/hyperfollow/seansharp/wild-world' />
              <Card url='./assets/takeItSlow.png' title="Take it Slow" description='Released 1-7-22' link='https://distrokid.com/hyperfollow/seansharp/take-it-slow-4' />
              <Card url='./assets/meBeforeYou.jpg' title="Me Before You" description='Released 10-8-21' link='https://distrokid.com/hyperfollow/seansharp/me-before-you-2' />
              <Card url='./assets/TheLastNight.jpg' title="Last the Night" description='Released 6-18-21' link='https://distrokid.com/hyperfollow/seansharp/last-the-night-feat-josh-elliott' />
              <Card url='./assets/CanYouHearTheCall.jpg' title="Can You Hear the Call?" description='Released 4-23-21' link='https://distrokid.com/hyperfollow/seansharp/can-you-hear-the-call-feat-worldsaway' />
            </Scene>
            <ambientLight intensity={0.1} />
            <Mirrors/>
          </Canvas>
        </React.Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
