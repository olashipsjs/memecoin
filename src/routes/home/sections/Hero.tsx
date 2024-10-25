import React from 'react';
import Container from '../../../components/Container';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import Box from '../../../components/Box';
import { useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = React.useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  return (
    <Container
      ref={containerRef}
      className='max-w-full w-full mx-auto flex items-center justify-center flex-col'
    >
      <Box className='w-10/12 md:w-3/5 mx-auto flex flex-col items-center py-12'>
        <Heading>
          <Image
            src='./assets/images/logo.jpeg'
            alt='grumpy-cat'
            loading='eager'
            className='rounded-full size-5 sm:size-7 inline'
          />
          <Text className='ml-1 font-medium text-[24px] sm:text-[32px] align-middle leading-[1]'>
            Grumpy
          </Text>
        </Heading>
        <Heading
          as={'h2'}
          className='text-[40px] sm:text-[48px] md:text-[80px] leading-[1.1] sm:leading-[1.084] md:leading-[1.05] font-semibold text-center mt-4'
        >
          The Coin for the Pessimist in All of Us.
        </Heading>
        <Button className='bg-primary text-white px-4 py-2 rounded-full text-[17px] mt-6 font-medium'>
          Claim Airdrop
        </Button>
      </Box>

      <Image
        className='w-full h-[560px] object-cover'
        src='./assets/images/64897b4aee50c9a803650f11_image.png'
        alt='ship-with-flag'
      />
    </Container>
  );
};

export default Hero;
