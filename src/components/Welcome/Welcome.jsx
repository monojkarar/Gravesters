import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Heading, Box } from 'grommet';

export class Welcome extends PureComponent {
  render() {
    const StyledDiv = styled.div`
      width: 80%;
      text-align: center;
    `;
    const StyledPara = styled.p`
      font-size: 1.5rem;
      line-height: 1.2;
      color: #555555
    `;
    const paraText = `Don't get buried under years of Lab Reports.
    Visualize how you've improved over time, add Lab results, and discover new data through charts and reports.`;

    return (
      <Box direction='column' fill='horizontal' justify='center' align='center'>
          <Heading level='2'>
              Let's fight Graves together !
          </Heading>
          <Box direction='row' fill='horizontal' justify='center' margin='none'>
            <StyledDiv>
              <StyledPara>
                {paraText}
              </StyledPara>
            </StyledDiv>
          </Box>
      </Box>
    )
  }
}

export default Welcome;
