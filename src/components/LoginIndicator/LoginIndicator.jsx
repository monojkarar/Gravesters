import React, { Fragment } from 'react';
import { Box, Anchor, Menu } from 'grommet';
import RoundedPictureDiv from 'common/RoundedPictureDiv';

const LoginIndicator = props => {
  const { isLoggedIn, loginPicture, loginName, userID } = props;
  return (
    <Fragment>
      {
        isLoggedIn
        &&
        <Box
          direction='row'
          justify='start'
          align='center'
          margin={{
            left: 'small'
          }}
        >
          <RoundedPictureDiv
            url={loginPicture.url}
            renderProps={{
              width: loginPicture.width,
              height: loginPicture.height,
              topMargin: '0px',
            }}
          />
          <Menu
            size='small'
            weight='bold'
            color='dark-2'
            margin={{
              left: 'small'
            }}
            label={loginName}
            items={[
              { label: 'Log out', onClick: () => {alert('Log out cliceked')}}
            ]}
          />
        </Box>
      }
      {
        isLoggedIn === false
        &&
        <Anchor color='brand' label='Log in' margin={{left: 'small'}}/>
      }
    </Fragment>
  )
}

export default LoginIndicator;

