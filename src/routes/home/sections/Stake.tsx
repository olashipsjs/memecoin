import React from 'react';
import Card from '../../../components/Card';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import Box from '../../../components/Box';
import Image from '../../../components/Image';

const Stake = () => {
  return (
    <Card className='col-span-full overflow-clip'>
      <Box className='pt-12 md:pt-20 pl-10 md:pl:16 pr-8 sm:w-3/5 sm:text-center sm:mx-auto'>
        <Heading className='text-[32px] md:text-[56px] leading-[1.1] font-semibold'>
          Grow your{' '}
          <Text className='bg-gradient-to-tr from-primary to-pink-200 bg-clip-text text-transparent'>
            Portfolio
          </Text>{' '}
          over time.
        </Heading>
        <Text
          as={'p'}
          className='text-[19px] md:text-[21px] leading-[1.38] font-medium mt-3'
        >
          Up to 24% APY when you stake your grumpy token
        </Text>
      </Box>

      <Box
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 0px',
          backgroundImage: 'url(./assets/images/device.png)',
        }}
        className='w-full h-full relative'
      >
        <Box className='flex flex-col items-center pt-48 absolute w-full h-full'>
          <Box className='w-[340px] flex flex-col items-center text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              className='size-12 inline bg-gradient-to-tr from-primary to-pink-200 rounded-full p-2.5 text-white'
            >
              <path
                fill='currentColor'
                d='m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2 4a1 1 0 0 1 1-1h11v2H4v14h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm5 9h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z'
              ></path>
            </svg>
            <Heading className='text-[21px] leading-[24px] font-medium mt-4'>
              Staked $72 on grumpy
            </Heading>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Stake;
