import React,{useEffect,useState} from 'react';
import  Pagination  from '@mui/material/Pagination';
import { Box,Stack,Typography } from '@mui/material';
import { exerciceOptions,fetchData } from '../utils/fetchData';
import ExerciceCard from './ExerciceCard';


const Exercices = ({exercices,setExercices,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercicesPerPage = 9;
  const indexOfLastExercise = currentPage * exercicesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercicesPerPage;
  console.log(bodyPart)

  const currentExercises = exercices.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e,value) =>{
     setCurrentPage(value);

     window.scrollTo({top:1800, behavior:'smooth'})
  } 
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciceOptions);
      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciceOptions);
      }

      setExercices(exercisesData);
    }

     fetchExercisesData();
   
  }, [bodyPart])
  
  return (
    <Box id="exercices"
        sx={{mt:{lg:'110px'}}}
        mt="50px"
        p='20px'
        >
        <Typography>
          Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap:{lg:'110px',xs:'50px'}}}
           flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercice,index) => (
              <ExerciceCard key={index} exercice={exercice} />
            ))}

        </Stack>
        <Stack mt='100px' alignItems='center'>
          {exercices.length > 9 && (
            <Pagination 
            color="standard"
            shape ="rounded"
            defaultPage={1}
            count={Math.ceil(exercices.length / exercicesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />

          ) }
        </Stack>
    </Box>
  )
}

export default Exercices