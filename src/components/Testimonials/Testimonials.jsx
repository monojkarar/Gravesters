import React, { PureComponent } from 'react';
import { Box, Text, Heading } from 'grommet';
import Avatar from 'components/Avatar';

class Testimonials extends PureComponent {

  createAvatars = () => {
    const people = [{
      name: 'George Clooney',
      testimonial: 'Gravesters is the first of its kind, and here to stay. It makes living with the disease a lot more manageable.'
    },
    {
      name: 'Meryl Streep',
      testimonial: 'It helped me understand the progression of my disease over the last few years. This should be the norm.'
    }, {
      name: 'Johnny Depp',
      testimonial: 'Everyone should ideally have such information at their fingertips. It helps you talk to your doctor and visually understand where you are going.'
    }
  ];

    return people.map(person => {
      return (
        <Box
          round='small'
          width='medium'
          height='medium'
          elevation='small'
          direction='column'
          margin='small'
          key={person.name}
        >
          <Avatar name={person.name} />
          <Text color='dark-2' margin='small'>
            {person.testimonial}
          </Text>
        </Box>
      )
    });
  }

  render() {
    return (
      <div>
        <Box fill='horizontal' align='center' margin='none'>
          <Heading color='dark-2' level='2'>
            See what others say about us...
          </Heading>
        </Box>
        <Box fill='horizontal' align='center' justify='evenly' direction='row'>
          {this.createAvatars()}
        </Box>
      </div>
    )
  }
}

export default Testimonials;
