import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import openSourceData from '../../../content/JsonFiles/open_source.json';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const OpenSourcesTable = () => {
  return (
      <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , mb:2,p:2}}>
    {/* {isExpanded && */}
     <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
         <TableContainer sx={{width:'70%',display:'flex',mx:'auto'}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
          <TableCell align="center" sx={{fontWeight:'bold'}}>Package Name</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {openSourceData.map((row)=>(
       
                row.packages.map((pack)=>(
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            key={pack.name}
          >
            <TableCell component="th" scope="row" align="center">
              {pack.name}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
            {pack.download.map((item)=>(
                <Typography component='a' key={item.link} href={item.link} sx={{display:'flex',flexDirection:'column',textDecoration:'none',color:'#2596be!important'}}>
               {item.name}
               </Typography>
            ))}
            </TableCell>
                  
                </TableRow> 
                
          ))
          ))}
          
  
      </TableBody>
    </Table>
  </TableContainer>
    </Grid>
    </Grid>
  )
}

export default OpenSourcesTable;