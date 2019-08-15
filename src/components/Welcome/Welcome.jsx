import React from 'react';
import styled from 'styled-components';
import { Heading, Box, Button } from 'grommet';
import { TEXTS } from 'constants/';
import { Login } from 'grommet-icons';

function Welcome(props) {
  const StyledDiv = styled.div`
    width: 80%;
    text-align: center;
  `;
  const StyledPara = styled.p`
    font-size: 1.5rem;
    line-height: 1.2;
    color: #555555
  `;

  const { onGetStartedClicked } = props;

  return (
    <Box
      direction='column'
      fill='horizontal'
      justify='center'
      align='center'
      elevation='none'
    >
        <Heading level='2' margin={{bottom: 'small'}}>
            {TEXTS.HEADING}
        </Heading>
        <Box
          direction='row'
          fill='horizontal'
          justify='center'
          margin='none'
          elevation='none'
        >
          <StyledDiv>
            <StyledPara>
              {TEXTS.INTRO}
            </StyledPara>
          </StyledDiv>
        </Box>
        <Button
          label='Get Started Now'
          margin='large'
          primary
          reverse
          icon={<Login/>}
          onClick={onGetStartedClicked}
        />
    </Box>
  )
}

export default Welcome;
