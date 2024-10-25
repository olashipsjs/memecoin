import React from 'react';
import Card from '../../../components/Card';
import Box from '../../../components/Box';
import Image from '../../../components/Image';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';

const Charity = () => {
  return (
    <Card className='relative col-span-full overflow-clip'>
      <Box className='w-full h-full absolute top-0 left-0 bg-black/[0.35] z-10 py-12 pl-10 md:pl-16 pr-8 flex flex-col justify-between'>
        <Heading className='text-white text-[40px] md:text-[64px] leading-[1.1] md:leading-[1.05] font-semibold w-3/4'>
          Transforming the world through Charity.
        </Heading>
        <Text
          as={'p'}
          className='text-[21px] md:text-[24px] leading-[28px] w-full md:w-3/5 text-white'
        >
          Among other initiatives, Floki has pledged to build a state-of-the-art
          school first on every continent, then in every underdeveloped nation
          of the world. Guatemala, Ghana, Laos, and Nigeria are already home to
          Floki schools.
        </Text>
      </Box>
      <Box className='absolute w-full h-full top-0 object-cover right-0'>
        <Image
          src='./assets/images/638d8c7a92837388bc16e33e_Lintern.jpg'
          alt='school-pupil-smiling'
          className='w-full h-full object-cover object-center'
        />
      </Box>
    </Card>
  );
};

export default Charity;
