import * as React from 'react';
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
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "0.5vh"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ActionAreaCard
              image={paesaggio}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
              <ActionAreaCard
                image={divano}
              />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
              <ActionAreaCard
                image={armadio}
              />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
