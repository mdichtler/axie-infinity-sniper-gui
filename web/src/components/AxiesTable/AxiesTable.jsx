import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function AxiesTable(props) {
  return (
    <TableContainer component={Paper} style={{width: '80%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Axie</TableCell>
            <TableCell align="left">Rank#</TableCell>
            
            <TableCell align="left">Class</TableCell>
                      <TableCell align="left">ID</TableCell>
                      <TableCell align="right">Price ($)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                            <img style={{width: "50px", height: "50px"}} src={row.image}/>

                  </TableCell>
                  <TableCell align="left">
                {row.player_rank}
                  </TableCell>
                  
                  <TableCell align="left">
                {row.class}
                  </TableCell>
                  <TableCell align="left">
                {row.id}
                  </TableCell>
                  <TableCell align="right">
                      <Button variant="outlined"
                              href={`https://marketplace.axieinfinity.com/axie/${row.id}`}

                      >${row.currentPriceUSD}</Button>

                  </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}