import React from 'react';
import Card from '../../../components/Card';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import Box from '../../../components/Box';

const Bot = () => {
  return (
    <Card className='col-span-full md:p-20 bg-black flex flex-col justify-center'>
      <Box className='pl-10 pr-8 md:pl-16 text-white'>
        <Heading
          as={'h2'}
          className='text-[96px] md:text-[112px] leading-[0.825] font-semibold'
        >
          Grow your{' '}
          <Text className='bg-clip-text bg-gradient-to-tr from-primary to-pink-200 text-transparent'>
            {' '}
            crypto assets
          </Text>{' '}
          over time.
        </Heading>

        <Heading className='text-[21px] md:text-[32px] leading-[1.1] font-semibold mt-8'>
          Trade using Grumpy Bot and earn interests
        </Heading>
      </Box>
    </Card>
  );
};

export default Bot;
