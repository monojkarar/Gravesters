import React, { PureComponent } from 'react';
import { Anchor, Box, Heading, Image } from 'grommet';

export class AppBar extends PureComponent {
  render() {
    return (
      <Box fill='horizontal'
        height='70px'
        tag='header'
        direction='row'
        align='center'
        justify='between'
        pad='small'
        elevation='small'
        style={{ zIndex: '1' }}
      >
        <Box direction='row'>
          <Image src="/src/assets/logo-48x48.png" margin={{right: 'small'}} />
          <Heading level='2' weight='300' margin='none'>Gravesters</Heading>
        </Box>
        <div>
          <Anchor color='brand' label='About' />
          <Anchor color='brand' label='Log in' margin={{left: 'small'}}/>
          <Anchor color='brand' label='Become a member' margin={{left: 'small'}} />
        </div>
      </Box>
    )
  }
}

export default AppBar;
