import React from 'react';
import theme from '../theme';
import { Grommet, Box } from 'grommet';
import HomePage from 'containers/HomePage';

function App({children}) {
  return (
    // This will propagate in all child components.
    <Grommet theme={theme} full={true}>
      <Box fill='horizontal'
        direction='column'
        align='center'
      >
        <HomePage />
      </Box>
      {children}
    </Grommet>
  );
}

export default App;
