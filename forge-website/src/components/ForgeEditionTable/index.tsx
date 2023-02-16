import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinaroForgeEditions from '../../../content/JsonFiles/LinaroForgeEditions.json';

const ForgeEditionTable = () => {
  return (
    <TableContainer sx={{width:'60%',display:'flex',mx:'auto',mb:2}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
          <TableCell align="center" sx={{fontWeight:'bold'}}>Feature</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Linaro Forge</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Linaro Forge Ultimate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {LinaroForgeEditions.map((row) => (
          <TableRow
            key={row.Feature}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {row.Feature}
            </TableCell>
            <TableCell align="center">{row.Linaro_Forge}</TableCell>
            <TableCell align="center">{row.Linaro_Forge_Ultimate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ForgeEditionTable;