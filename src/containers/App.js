import React from 'react';
import theme from '../theme';
import Routes from '../routes';
import { Grommet, Box } from 'grommet';
import Welcome from 'components/Welcome';
import AppBar from 'components/AppBar';
import Testimonials from 'components/Testimonials';

function App() {
  return (
    // This will propagate in all child components.
    <Grommet theme={theme} full={true}>
      <Box fill='horizontal'
        direction='column'
        align='center'
      >
        <AppBar />
        <Welcome />
        <Testimonials/>
      </Box>
    </Grommet>
  );
}

export default App;
