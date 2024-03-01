import './App.css';
import Navbar from "../src/components/Shared/Navbar"
import HomePageGrid from "../src/components/Shared/HomePageGrid"
import { Box, Container } from '@mui/system';
import Carosello from "../src/components/Shared/Carosello"
import ProductCarosell from "../src/components/Static/ProductCarosel"



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Carosello/>
      {/* <Container maxWidth="false" disableGutters="true">
        <Box sx={{ bgcolor: '#cfe8fc', maxHeight: '25vh' }} >   
        </Box>
      </Container> */}
      <br></br>
      <HomePageGrid/>
      <ProductCarosell/>
      
    
      
    </div>
  );
}

export default App;
