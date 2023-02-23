import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import licenseData from '../../../content/JsonFiles/licence-server-downloads.json';

const licenseServerTable = () => {
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto',mb:4}}>
    <TableContainer sx={{width:'100%',display:'flex',mx:'auto'}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
          <TableCell align="center" sx={{fontWeight:'bold'}}>Operating System</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Download</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Checksum</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {licenseData.map((row) => (
          <TableRow
            key={row.os}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {row.os}
            </TableCell>
                <TableCell align="center">
                  {row.download.map((item,index)=>(
                    <Typography component='div' key={index} sx={{color:'#2596be',}}>
                      <Typography component='a' sx={{color:'#2596be',textDecoration:'none',fontSize:'12px'}} href={item.link}>{item.name}</Typography>
                      </Typography>
                  ))}
                </TableCell>
            
            <TableCell align="center"> {row.download.map((item)=>(
                    <div key={item.link}>{item.checksum}</div>
                  ))}</TableCell>
                </TableRow> 
         
          
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Grid>
  )
}

export default licenseServerTable;