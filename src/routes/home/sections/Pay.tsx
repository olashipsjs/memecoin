import React from 'react';
import Heading from '../../../components/Heading';
import Box from '../../../components/Box';
import Image from '../../../components/Image';
import Text from '../../../components/Text';
import Card from '../../../components/Card';

const Pay = () => {
  return (
    <Card className='col-span-full flex flex-col items-center justify-center'>
      <Box className='w-3/5 md:w-2/5 space-y-3 pt-12 sm:text-center mx-auto'>
        <Heading
          as={'h2'}
          className='text-[32px] md:text-[56px] leading-[1.1] sm:leading-[1.1] lg:leading-[60px] font-semibold'
        >
          Say Hello to Grumpy Card
        </Heading>

        <Text
          as={'p'}
          className='text-[19px] sm:text-[21px] leading-[1.38] font-medium'
        >
          Widely supported on Apple & Google Pay.
        </Text>
      </Box>
      <Box
        style={{
          backgroundSize: 'scale-down',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 0px',
          backgroundImage: 'url("./assets/images/device.png")',
        }}
        className='w-full h-full overflow-clip relative'
      >
        <Box className='w-full h-full flex flex-col items-center justify-center absolute pt-24'>
          <Box className='size-[296px] rounded-lg bg-gradient-to-tl from-orange-400 to-white flex gap-1 items-end p-3 justify-end'>
            <Image
              src='./assets/images/google-icon.webp'
              alt='google-icon'
              className='size-8'
            />
            <Text className='text-[24px]'>+</Text>
            <Image
              src='./assets/images/apple-icon.webp'
              alt='apple-icon'
              className='size-8'
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Pay;
