import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { Box, Heading } from 'grommet';

class Avatar extends PureComponent {
  render() {
    const {name} = this.props;
    const RoundedDiv = styled.div`
      border-radius: 50%;
      height: 150px;
      width: 150px;
      background-image: url(https://i.pravatar.cc/150);
      margin-top: 20px;
    `;
    return (
      <Box direction='column' align='center' justify='center'>
        <RoundedDiv />
        <Heading level='3' color='dark-1'>{name}</Heading>
      </Box>
    )
  }
}

export default Avatar;
