import React, { Fragment } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { ColoredRectButton } from 'common/';
import { FacebookOption } from 'grommet-icons';

const FacebookLoginButton = (props) => {
  return (
    <Fragment>
      <FacebookLogin
        appId="2214535158596456"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.onSuccess}
        render={renderProps => (
          <ColoredRectButton
            label='Login with Facebook'
            onClick={renderProps.onClick}
            icon={<FacebookOption/>}
            borderColor='#3C5A97'
            fillColor='#3C5A97'
            primary
          />
          )
        }
      />
    </Fragment>
  )
};

export default FacebookLoginButton;
