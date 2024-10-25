import React from 'react';
import Container from '../../../components/Container';
import Box from '../../../components/Box';
import Pay from './Pay';
import Domain from './Domain';
import Charity from './Charity';
import Security from './Security';
import Stake from './Stake';
import Bot from './Bot';
import Play from './Play';

const Grid = () => {
  return (
    <Container className='max-w-[400px] md:max-w-[1140px] mx-auto w-full px-3 mt-32 mb-12'>
      <Box className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Pay />
        <Domain />
        <Charity />
        <Security />
        <Stake />
        <Bot />
        <Play />
      </Box>
    </Container>
  );
};

export default Grid;
