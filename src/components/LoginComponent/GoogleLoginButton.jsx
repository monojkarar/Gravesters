import React, { Fragment } from 'react';
import { Google } from 'grommet-icons';
import { ColoredRectButton } from 'common/';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = (props) => {
  return (
    <Fragment>
        <GoogleLogin
          clientId="902255523439-o198fosmh9lhhivukahoc424sru14mul.apps.googleusercontent.com"
          buttonText="Login using Google"
          onSuccess={props.onSuccess}
          onFailure={props.onFailure}
          cookiePolicy={'single_host_origin'}
          render= {renderProps => (
              <ColoredRectButton
                label='Login using Google...'
                onClick={renderProps.onClick}
                icon={<Google/>}
                borderColor='#db3236'
                fillColor='#db3236'
                primary
              />
            )
          }
        />
    </Fragment>
  )
}

export default GoogleLoginButton;


