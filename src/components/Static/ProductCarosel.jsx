import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CaroselloProdotti from './CaroselloProdotti'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff8dc',
  color: theme.palette.text.primary,
}));

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{width:"80%", margin:"auto", marginTop:"6vh"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
            <div style={{
                fontSize:"4vh",
                textAlign:"start",
                marginLeft:"5vh"
                }}>I NOSTRI PRODOTTI
            </div>
            </StyledTableCell>
            <StyledTableCell>
            <CaroselloProdotti></CaroselloProdotti>
            </StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}