import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import DocumentationHeroCard from '../components/HeroCard/DocumentationHeroCard/index';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider,createTheme } from '@mui/material/styles';

const Documentation = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  return (
    <ThemeProvider theme={formtheme}>
        <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
    
    <Grid>
      {/* <HeaderBar/> */}
        <DocumentationHeroCard />
      <List sx={{ listStyleType: 'disc',padding:'30px',minHeight:'68vh',mt:8 ,marginLeft:'40px'}}>
        
        <ListItem sx={{ display: 'list-item'}}>
          <Typography sx={{textDecoration:'none',color:'black'}} variant='h5'>Forge user guide</Typography>
          <Grid sx={{display:'flex',flexDirection:'column',mt:2}}>
          <Typography sx={{textDecoration:'none',color:'#2596be'}} variant='h6'  component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/index.html'>Html</Typography>
          <Typography sx={{textDecoration:'none',color:'#2596be'}} variant='h6' component='a' href='https://docs.linaroforge.com/22.1.3/userguide-forge.pdf'>PDF</Typography>
        </Grid>
        </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
          <Typography sx={{textDecoration:'none',color:'black'}} variant='h5'>License server user guide</Typography>
          <Grid sx={{display:'flex',flexDirection:'column',mt:2}}>
          <Typography sx={{textDecoration:'none',color:'#2596be'}} variant='h6'  component='a' href='https://docs.linaroforge.com/22.1.3/html/101169_arm-licence-server-user-guide/index.html'>Html</Typography>
          <Typography sx={{textDecoration:'none',color:'#2596be'}} variant='h6' component='a' href='https://docs.linaroforge.com/22.1.3/userguide-licenceserver.pdf'>PDF</Typography>
          </Grid>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
          <Typography sx={{textDecoration:'none',color:'black'}} variant='h5'>MAP metric plugin interface</Typography>
          <Typography sx={{textDecoration:'none',color:'#2596be',mt:4}} variant='h6'  component='a' href='https://docs.linaroforge.com/22.1.3/html/101532_arm-map-metric-plugin-interface/index.html'>Html</Typography>
          </ListItem>
       
      </List>
    <Footer/>
    </Grid>
    </ThemeProvider>
  )
}

export default Documentation;