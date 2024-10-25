import React from 'react';
import Container from '../../../components/Container';
import Heading from '../../../components/Heading';
import Box from '../../../components/Box';
import Image from '../../../components/Image';
import Text from '../../../components/Text';
import Card from '../../../components/Card';
import { LightningIcon } from '../../../components/Icons';

const Domain = () => {
  return (
    <React.Fragment>
      <Card className='space-y-12 flex flex-col justify-center'>
        <Box className='rounded-full gap-2 h-[48px] max-w-[400px] mx-auto px-4 border border-gray-200 shadow-[0px_0px_12px_8px] overflow-hidden flex items-center shadow-black/[0.03]'>
          <Box
            as={'span'}
            className='text-red-500 size-[24px]'
          >
            <LightningIcon />
          </Box>
          <Text className='text-[24px]'>domainname.grumpy</Text>
        </Box>

        <Box className='pl-10 md:pl-16 pr-6'>
          <Heading className='text-[96px] lg:text-[112px] leading-[0.825] font-semibold'>
            Build online using our name
          </Heading>
        </Box>
      </Card>
      <Card className='bg-gradient-to-b from-yellow-400 to-pink-400 text-white flex flex-col justify-center'>
        <Box className='pl-10 md:pl-16 pr-6'>
          <Heading className='text-[96px] lg:text-[112px] leading-[0.825] font-semibold'>
            No fees. Not even hidden ones.
          </Heading>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default Domain;
