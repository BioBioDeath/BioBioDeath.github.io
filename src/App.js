import { Box } from '@mui/system';
import { Header } from './components/Header';
import Render from './components/Render';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Render/>
    </Box>
  );
}

export default App;
