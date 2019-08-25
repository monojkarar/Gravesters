import React, { PureComponent } from 'react'
import { Box, Heading } from 'grommet';
import RoundedPictureDiv from 'common/RoundedPictureDiv';

class Avatar extends PureComponent {
  render() {
    const {name, url, renderProps} = this.props;
    return (
      <Box direction='column' align='center' justify='center'>
        <RoundedPictureDiv url={url} renderProps={renderProps} />
        <Heading level='3' color='dark-1'>{name}</Heading>
      </Box>
    )
  }
}

export default Avatar;
