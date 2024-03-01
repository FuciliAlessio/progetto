import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ActionAreaCard from "../Shared/Card"
import paesaggio from "../../images/paesaggio.jpeg"
import divano from "../../images/divano.jpg"
import armadio from "../../images/armadio.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 1.5s ease', // Aggiungi una transizione CSS per l'animazione
}));

export default function BasicGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop =  document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.01; // Cambia questo valore se vuoi regolare il punto di attivazione dello scroll

    //se voglio far rimanere le card fisse dopo lo scroll decommenta questo
    /* if (!isVisible && scrollTop > triggerPoint) {
      setIsVisible(true);
    } */

    setIsVisible(scrollTop > triggerPoint);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: "1.5vh", padding:'3vh'}}>
      <div style={{
        fontSize:"4vh",
        textAlign:"start",
        marginLeft:"5vh"
      }}>I NOSTRI PROGETTI</div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100%)' }}>
            <ActionAreaCard
              image={paesaggio}
            />
          </Item >
        </Grid>
        <Grid item xs={4}>
          <Item style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-200%)' }}>
              <ActionAreaCard
                image={divano}
              />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-300%)' }}>
              <ActionAreaCard
                image={armadio}
              />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
