import './App.css';
import Navbar from "../src/components/Navbar"
import HomePageGrid from "../src/components/HomePageGrid"
import { Box, Container } from '@mui/system';


function App() {
  return (
    <div className="App">
      
      <Container maxWidth="false" disableGutters="true">
          <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} >
            <Navbar/>
          </Box>
      </Container>
      
      <HomePageGrid/>
    
      
    </div>
  );
}

export default App;
