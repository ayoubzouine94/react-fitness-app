import React,{useEffect,useState} from 'react';
import { Box ,Button,Stack,TextField,Typography} from '@mui/material';


const SearchExercice = () => {
  return (
    <Stack
     alignItems="center"
     justifyContent="center"
     mt="37px" p="20px"
     >
      <Typography
          fontWeight={700} sx={{
            fontSize: {lg:'44px',xs:'30px'}
          }}
          mb='50px' textAlign="center"
       >
        Awesome Exercices You <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
         sx={{
          input:{
             fontWeight:'700',
             border:"none",
             borderRadius:'10px'
         },
         width: { lg:'800px',xs:'350px'}
         }}
         height="76px"
         placeholder="Search Exercice"
         value=""
         onChange={(e) =>{}}
         type="text"
        />
        <Button
         className='search-btn'
         sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{ lg:'175px', xs: '80px'},
          fontSize:{ lg: '20px',xs:'14px'},
          height:'56px',
          position:'absolute'
         }}
         >
             Search
        </Button>

      </Box>

    </Stack>
  )
}

export default SearchExercice