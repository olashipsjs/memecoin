import React from 'react';
import Container from '../../../components/Container';
import Heading from '../../../components/Heading';

const About = () => {
  return (
    <Container className='max-w-[400px] md:max-w-[800px] w-full mx-auto mt-20 px-3'>
      <Heading
        as={'h2'}
        className='text-[21px] md:text-[28px] sm:leading-[1.38] font-semibold'
      >
        Forget the sunshine and rainbows of other tokens. Grumpy Coin knows that
        life isn’t always sweet, and we’re here to bring some realism into the
        blockchain world. For those who love their crypto with a side of
        sarcasm, Grumpy is here to keep it real. Grumpy Coin leverages the
        Ethereum blockchain to bring a new level of transparency and trust to
        the memecoin world. Grumpy Coin is built to last, aiming to bring
        sustainable value to our holders and real use cases that matter.
      </Heading>
    </Container>
  );
};

export default About;
