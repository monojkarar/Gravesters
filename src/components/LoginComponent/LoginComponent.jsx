import React, { PureComponent } from 'react';
import { Layer, Button } from 'grommet';

export default class LoginComponent extends PureComponent {
  render() {
    return (
      <Layer
        onEsc={() => this.setState({open: false})}
        onClickOutside={() => this.setState({open: false})}
        modal={false}

      >
        <Button>Login using Google</Button>
        <Button>Login using Facebook</Button>
      </Layer>
    )
  }
}
