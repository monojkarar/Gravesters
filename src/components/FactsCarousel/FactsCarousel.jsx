import React, { PureComponent } from 'react';
import { Carousel, Text, Box } from 'grommet';
import styled from 'styled-components';

export class FactsCarousel extends PureComponent {

  createCarouselElems =() => {
    const facts = [
      'Did you know that Women are 10 times more likely to get Graves disease than men ?',
      'Of all the patients who undergo RIA therapy, about 5.9% experiene a relapse within 6 months.',
      'Did you know that patients that were TRAb positive are significantly more likely to fail medical treatment ?',
      'Did you know that Graves can cause anger fits ?',
      'Methimazole and Carbimazole are the preferred "thionamides".',
    ]
    return facts.map(fact => (
        <Box margin='large' width='large' height='small' fill='horizontal' align='center' justify='center'>
          {fact}
        </Box>
      )
    );
  }



  render() {
    return (
      <Box height="small" width="medium" overflow="hidden">
        <Carousel>
          {this.createCarouselElems()}
        </Carousel>
      </Box>
    )
  }
}

export default FactsCarousel;

