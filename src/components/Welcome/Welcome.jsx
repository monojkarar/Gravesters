import React, { PureComponent } from 'react';
import {Heading } from 'grommet';

export class Welcome extends PureComponent {
  render() {
    return (
      <Heading margin="none" level="2" weight="thin">Hey Gravester!</Heading>
    )
  }
}

export default Welcome;
