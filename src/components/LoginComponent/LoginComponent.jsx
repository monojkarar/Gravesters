import React, { PureComponent, Fragment } from 'react';
import { Layer, Box, Heading, Button } from 'grommet';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import { FormClose } from 'grommet-icons';
import { navigate } from '@reach/router';
import { loginInfoAction } from 'actions/actionCreators';
import { connect } from 'react-redux';


class LoginComponent extends PureComponent {
  facebookSigninResponse = response => {
    const { name, email, picture, userID } = response;
    this.saveLoginInfo({
      isLoggedIn: true,
      name,
      email,
      picture: picture.data,
      userID,
    });
    setTimeout(this.closeLoginModal, 2000);
  }

  googleSigninResponse = ({profileObj}) => {
    const { name, email, } = profileObj;
    this.saveLoginInfo({
      isLoggedIn: true,
      name,
      email,
      picture: {
        height: 50,
        width: 50,
        url: profileObj.imageUrl,
      },
      userID: profileObj.googleId,

    });
    setTimeout(this.closeLoginModal, 2000);
  }

  signinError = error => {
    console.error(error);
  }

  closeLoginModal = () => {
    navigate('/');
  }

  saveLoginInfo = loginInfo => {
    const { saveLoginInfoAction } = this.props;
    // Fire off a call to save the login Info.
    saveLoginInfoAction(loginInfo);
  }

  render() {
    const { isLoggedIn } = this.props;
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
            { isLoggedIn ? 'Welcome to Gravesters...!' : 'Login using your Social Accounts.' }
          </Heading>

          { !isLoggedIn
            &&
            <Fragment>
              <GoogleLoginButton onSuccess={this.googleSigninResponse} onFailure={this.signinError} />
              <br/>
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
            </Fragment>
          }
        </Box>
      </Layer>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  saveLoginInfoAction: loginInfo => dispatch(loginInfoAction(loginInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
