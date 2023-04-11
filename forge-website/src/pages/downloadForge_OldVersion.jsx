import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import previousVersions from '../../content/JsonFiles/previous_versions.json';
import HeroCardName from '../components/HeroCard/HeroCardName/index';
import Footer from '../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const DownloadForge_OldVersion = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  return (
    <ThemeProvider theme={formtheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CssBaseline />
      <Grid flexGrow={2} sx={{
        backgroundColor: 'white',
        boxSizing: 'border-box', m: 0, p: 0, width: { xs: 'min-content', md: '100%', sm: '100%' }
        ,
      }}>

        <HeroCardName title_1={'Download Linaro Forge'} title_2={'Development Tools & Software'} />

        <Grid sx={{ width: '100%', mt: 2, minHeight: { md: '70.5vh' } }}>
          <Grid sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, borderColor: 'white', ml: 6, width: '100%', mt: 4, mx: 'auto', }}>
            <Typography variant="h5" sx={{ mt: 2, mb: 4, mx: 'auto', fontWeight: '600' }}>Older versions of Linaro Forge remote client software</Typography>
          </Grid>
          {previousVersions.map((row, index) => (
            <Grid key={index}>
              <Typography variant="h6" sx={{ pl: 10, mb: 3 }}>Linaro Forge version {row.forge}</Typography>
              <TableContainer
                sx={{ mx: 'auto', width: '90%', mb: 4 }}
                component={Paper}>

                <Table sx={{ minWidth: 650, mb: 3, p: 3 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow >
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>Operating System</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>Packages</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.downloads.map(item => (
                      <TableRow
                        key={item.os}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {item.os}
                        </TableCell>
                        <TableCell align="center">
                          {item.download.map(itemChild => (
                            <Typography component='div' key={itemChild.link}>
                              <Typography component='a' style={{ color: '#2596be', fontSize: '12px', textDecoration: 'none' }} href={itemChild.link}>{itemChild.name}</Typography>
                            </Typography>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>
          ))}

        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default DownloadForge_OldVersion;

{/* <TableBody>
    
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {}
            </TableCell>
                <TableCell align="center">
                  {row.versions.map((item)=>(
                    <div key={item.forge}>{item.forge}</div>
                  ))}
                </TableCell>
            
            <TableCell style={{fontSize:'12px'}} align="center">
              
                <Typography component='div' key={pack.link}>
                <Typography component='a' sx={{color:'#2596be',textDecoration:'none',fontSize:'12px'}} href={}>{}
                {pack.suffix &&<span style={{color:'black',}}>-{}</span>}
                </Typography>
                </Typography>
             
                   
                  </TableCell>
                </TableRow> 
         
          
        
      </TableBody> */}
