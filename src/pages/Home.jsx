import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercice from '../components/SearchExercice';
import Exercices from '../components/Exercices';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercice />
      <Exercices />
    </Box>
  )
}

export default Home