import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import downloads from '../../../content/JsonFiles/downloads.json';

const DownloadTable = () => {
  return (
    
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
    <TableContainer sx={{width:'100%',display:'flex',mx:'auto'}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
          <TableCell align="center" sx={{fontWeight:'bold'}}>Operating System</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Download</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>MD5 checksum</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {downloads.map((row,index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {row.os}
            </TableCell>
                <TableCell align="center">
                  {row.download.map((item)=>(
                    <div key={item.link} style={{color:'#2596be',}}><Link style={{textDecoration:'none!important',color:'#2596be'}} href={item.link}>{item.name}</Link></div>
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

export default DownloadTable;