import React, { PureComponent } from 'react';
import { Anchor, Box, Heading, Image } from 'grommet';
import LoginIndicator from 'components/LoginIndicator';

class AppBar extends PureComponent {
  render() {
    const { isLoggedIn, name, userID, picture } = this.props.loginDetails;
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
        <Box
          fill
          direction='row'
          margin='x-small'
          pad='small'
          justify='end'
          align='center'
        >
          { !isLoggedIn && <Anchor color='brand' label='About' /> }
          <LoginIndicator
            isLoggedIn={isLoggedIn}
            loginName={name}
            loginPicture={picture}
            userID={userID}
          />
          { !isLoggedIn && <Anchor color='brand' label='Become a member' margin={{left: 'small'}} />}
        </Box>
      </Box>
    )
  }
}

export default AppBar;
