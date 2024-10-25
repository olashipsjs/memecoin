import React from 'react';
import Card from '../../../components/Card';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import Image from '../../../components/Image';
import Box from '../../../components/Box';

const Security = () => {
  return (
    <React.Fragment>
      <Card className='flex flex-col justify-center'>
        <Box className='pl-10 md:pl-16 pr-8'>
          <Heading
            as={'h2'}
            className='text-[48px] md:text-[64px] leading-[1.1] font-semibold text-wrap bg-gradient-to-br from-primary to-pink-200 bg-clip-text text-transparent'
          >
            Standard encryption that makes hackers grumpy both on Ethereum and
            Binance blockchain
          </Heading>
        </Box>
      </Card>

      <Card className='bg-gradient-to-tr from-primary to-pink-200 text-white'>
        <Box className='pl-10 md:pl-16 pt-10 pr-8'>
          <Heading
            as={'h2'}
            className='text-[40px] md:text-[64px] leading-[1.1] font-semibold text-wrap'
          >
            The only memecoin with military-grade security
          </Heading>
        </Box>

        <Box className='p-8'>
          <Card className='h-fit p-8 md:p-16 pt-4 border border-gray-200 text-gray-950'>
            <Image
              src='./assets/images/larry.png'
              alt=''
              className='size-16 sm:size-24 mx-auto rounded-full'
            />
            <Heading className='text-[21px] md:text-[24px] leading-[1.2] text-center font-semibold'>
              Larry Lundy
            </Heading>
            <Text
              as={'p'}
              className='text-[17px] text-gray-500 text-center mt-1'
            >
              Formerly with CertiK
            </Text>
            <blockquote className='block text-center mt-8 text-[19px] leading-[1.3] font-medium'>
              Grumpy's contract ecosystem is revolutionary with the best
              security and features.
            </blockquote>
          </Card>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default Security;
