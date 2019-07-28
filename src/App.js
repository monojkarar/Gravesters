import React from 'react';
import theme from './theme';
import { Grommet, Box } from 'grommet';
import Welcome from 'components/Welcome';
import AppBar from 'components/AppBar';

function App() {
  return (
    // This will propagate in all child components.
    <Grommet theme={theme} full={true}>
      <Box fill={true}
        direction='column'
        align='center'
      >
        <AppBar />
        <Welcome />
      </Box>
    </Grommet>
  );
}

export default App;
