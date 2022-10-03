import './app.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import Navbar  from './components/Navbar';
import Home  from './pages/Home';
import ExerciceDetails from './pages/ExerciceDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/exercice/:id' element={<ExerciceDetails />}></Route>

          
      </Routes> 
      <Footer />       
    </Box>
  );
}

export default App;
