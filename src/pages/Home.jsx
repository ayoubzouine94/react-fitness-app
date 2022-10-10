import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercice from '../components/SearchExercice';
import Exercices from '../components/Exercices';

const Home = () => {
  const [exercices, setExercices] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
 // console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercice 
         setExercices={setExercices}
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}
      />
      <Exercices 
         setExercices={setExercices}
         bodyPart={bodyPart}
         exercices={exercices}
        />
    </Box>
  )
}

export default Home