import React, { PureComponent } from 'react';
import { Layer, Box, Heading, Button } from 'grommet';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import { FormClose } from 'grommet-icons';
import { navigate } from '@reach/router';


export default class LoginComponent extends PureComponent {
  facebookSigninResponse = response => {
    console.log(response);
  }

  googleSigninResponse = response => {
    console.log(response);
  }

  signinError = error => {
    console.error(error);
  }

  closeLoginModal = () => {
    navigate('/');
  }

  render() {
    return (
      <Layer
        onEsc= {this.closeLoginModal}
        onClickOutside={this.closeLoginModal}
        modal={true}
        margin='small'
      >
        <Box
          pad='medium'
          gap='small'
          width='large'
          align='center'
          justify='center'
          wrap={false}
        >
          <Heading level={3} margin={{
            top: 'xsmall',
            bottom: 'medium'
          }} color='dark-3'>
            Login using your Social Accounts.
          </Heading>

          <GoogleLoginButton onSuccess={this.googleSigninResponse} onFailure={this.signinError} />
          <FacebookLoginButton onSuccess={this.facebookSigninResponse} onFailure={this.signinError} />
          <Box
            fill='horizontal'
            margin={{
              bottom: 'xsmall',
              top: 'xsmall',
              left: 'none',
              right: 'none'
            }}
            pad='none'
            align='center'
            justify='end'
            direction='row'
          >
            <Button
              label='Cancel'
              plain
              color='status-error'
              icon={<FormClose/>}
              reverse
              onClick={this.closeLoginModal}
            />
          </Box>
        </Box>
      </Layer>
    )
  }
}
