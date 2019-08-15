import React, { PureComponent } from 'react';
import AppBar from 'components/AppBar';
import Welcome from 'components/Welcome';
import Testimonials from 'components/Testimonials';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

class HomePage extends PureComponent {

  onGetStartedClicked = () => {
    navigate('login');
  }

  render() {
    return (
      <div>
        <AppBar />
        <Welcome onGetStartedClicked={this.onGetStartedClicked}/>
        <Testimonials/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

