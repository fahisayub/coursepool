import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
      <Box textAlign="center" fontSize="xl">
        <Navbar/>
        <MainRoutes/>
      </Box>
  );
}

export default App;
