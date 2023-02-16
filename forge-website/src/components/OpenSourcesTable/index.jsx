import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import openSourceData from '../../../content/JsonFiles/open_source.json';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const OpenSourcesTable = ({isExpanded}) => {
    console.log(openSourceData);
  return (
    <>
    {isExpanded &&
    <Container fixed>
         <TableContainer sx={{width:'100%',display:'flex',mx:'auto'}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
        {/* <TableCell align="center" sx={{fontWeight:'bold'}}>version</TableCell> */}
          <TableCell align="center" sx={{fontWeight:'bold'}}>Package Name</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {openSourceData.map((row)=>(
                row.packages.map((pack)=>(
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {pack.name}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
            {pack.download.map((item)=>(
                <Typography component='a' href={item.link} sx={{display:'flex',flexDirection:'column',textDecoration:'none',color:'#2596be!important'}}>
               {item.name}
               </Typography>
            ))}
            </TableCell>
                {/* <TableCell align="center">
                  {row.versions.map((item)=>(
                    <div>{item.forge}</div>
                  ))}
                </TableCell> */}
            
            {/* <TableCell align="center"> {row.versions.map((item)=>(
              item.packages.map((pack)=>(
                <div style={{color:'#2596be',}}><Link style={{textDecoration:'none!important',color:'#2596be'}} href={pack.link}>{pack.label}</Link>
                {pack.suffix &&<span style={{color:'black',}}>-{pack.suffix}</span>}
                </div>
              ))
                   
                  ))}</TableCell> */}
                  
                </TableRow> 
          ))
          ))}
          
  
      </TableBody>
    </Table>
  </TableContainer>
    </Container>
}
    </>
  )
}

export default OpenSourcesTable;