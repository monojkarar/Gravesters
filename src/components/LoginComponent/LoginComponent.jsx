import React, { PureComponent } from 'react';
import { Layer, Box, Heading } from 'grommet';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';


export default class LoginComponent extends PureComponent {
  onSignIn = googleUser => {
    console.log(googleUser);
    alert(`Welcome ${googleUser.getBasicProfile().getName()}`);
  }

  facebookSigninResponse = response => {
    console.log(response);
  }

  googleSigninResponse = response => {
    console.log(response);
  }

  signinError = error => {
    console.error(error);
  }

  render() {
    return (
      <Layer
        onEsc={() => this.setState({open: false})}
        onClickOutside={() => this.setState({open: false})}
        modal={true}
        margin='large'
      >
        <Box
          pad='medium'
          gap='small'
          width='large'
          align='center'
          justify='center'
        >
          <Heading level={3} margin='none' color='dark-3'>
            Login using your Social Accounts.
          </Heading>
          <GoogleLoginButton onSuccess={this.googleSigninResponse} onFailure={this.signinError} />
          <FacebookLoginButton onSuccess={this.facebookSigninResponse} onFailure={this.signinError} />
        </Box>
      </Layer>
    )
  }
}
