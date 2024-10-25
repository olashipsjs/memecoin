import React from 'react';
import Card from '../../../components/Card';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import Box from '../../../components/Box';

const Play = () => {
  return (
    <Card className='col-span-full bg-gradient-to-tl from-primary to-pink-200 text-white flex flex-col justify-center'>
      <Box className='pl-10 md:pl-16 pr-8'>
        <Heading
          as={'h2'}
          className='text-[24px] md:text-[32px] font-semibold'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            className='size-8 inline'
          >
            <path
              fill='currentColor'
              d='M3.505 7.5a.5.5 0 0 1 .5-.5h1V6a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0V8h-1a.5.5 0 0 1-.5-.5M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-9.999.5a4.5 4.5 0 0 1 4.5-4.5h5.008a4.5 4.5 0 1 1 0 9H5.501a4.5 4.5 0 0 1-4.5-4.5m4.5-3.5a3.5 3.5 0 1 0 0 7h5.008a3.5 3.5 0 1 0 0-7z'
            ></path>
          </svg>
          <Text className='ml-1'>Grumpy Play</Text>
        </Heading>

        <Heading className='text-[48px] sm:text-[64px] md:text-[112px] leading-[0.9] md:leading-[0.825] font-semibold mt-6 w-full md:w-4/6'>
          Your play. Your game. Your rules.
        </Heading>
      </Box>
    </Card>
  );
};

export default Play;
