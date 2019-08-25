import { connect } from 'react-redux';
import AppBar from 'components/AppBar';
import Welcome from 'components/Welcome';
import { navigate } from '@reach/router';
import React, { PureComponent } from 'react';
import Testimonials from 'components/Testimonials';

class HomePage extends PureComponent {

  onGetStartedClicked = () => {
    navigate('login');
  }

  render() {
    const { loginDetails } = this.props;
    return (
      <div>
        <AppBar loginDetails={loginDetails}/>
        <Welcome onGetStartedClicked={this.onGetStartedClicked}/>
        <Testimonials/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginDetails: state.login,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

