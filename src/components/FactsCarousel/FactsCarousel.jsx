import React, { PureComponent } from 'react';
import { Carousel, Paragraph, Box } from 'grommet';

export class FactsCarousel extends PureComponent {
  render() {
    return (
      <Box margin="small">
        <Carousel>
          <Paragraph color="neutral-1" margin="none">
            Did you know that Women are 10 times more likely to get Graves disease than men ?
          </Paragraph>
          <Paragraph color="neutral-1" margin="none">
            Of all the patients who undergo RIA therapy, about 5.9% experiene a relapse within 6 months.
          </Paragraph>
          <Paragraph color="neutral-1" margin="none">
            Did you know that patients that were TRAb positive are significantly more likely to fail medical treatment ?
          </Paragraph>
          <Paragraph color="neutral-1" margin="none">
            Did you know that Graves can cause anger fits ?
          </Paragraph>
          <Paragraph color="neutral-1" margin="none">
            Methimazole and Carbimazole are the preferred "thionamides".
          </Paragraph>
        </Carousel>
      </Box>
    )
  }
}

export default FactsCarousel;

