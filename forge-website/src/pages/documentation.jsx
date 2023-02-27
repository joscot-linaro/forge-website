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
        <ListItem sx={{ display: 'list-item' }}><Typography sx={{textDecoration:'none',color:'black'}} variant='h5'  component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/index.html'>
          Forge user guide</Typography><Typography sx={{textDecoration:'none',color:'black'}} variant='h5' component='a' href='https://docs.linaroforge.com/22.1.3/userguide-forge.pdf'>[PDF]</Typography></ListItem>
          <ListItem sx={{ display: 'list-item' }}><Typography sx={{textDecoration:'none',color:'black'}} variant='h5' component='a' href='https://docs.linaroforge.com/22.1.3/html/101169_arm-licence-server-user-guide/index.html'>
          License server user guide</Typography><Typography sx={{textDecoration:'none',color:'black'}} variant='h5' component='a' href='https://docs.linaroforge.com/22.1.3/userguide-licenceserver.pdf'>[PDF]</Typography></ListItem>
     
          <ListItem sx={{ display: 'list-item' }}><Typography sx={{textDecoration:'none',color:'black'}} variant='h5' component='a' href='https://docs.linaroforge.com/22.1.3/html/101532_arm-map-metric-plugin-interface/index.html'>
          MAP metric plugin interface</Typography></ListItem>
      </List>
    {/* <List style={{disply:'flex',flexDirection:'column',padding:'30px',minHeight:'100vh'}}>
        <Grid sx={{display:'flex',flexDirection:'column',}}>
        <Typography variant="h6" sx={{mt:8,fontWeight:'600'}}>User guide</Typography>
        <Typography variant="body1" component='a' href='https://docs.linaroforge.com/22.1.3/userguide-licenceserver.pdf' sx={{mt:4,fontWeight:'500',mb:1,fontSize:'14px',textDecoration:'none',color:'#2596be'}}>https://docs.linaroforge.com/22.1.3/userguide-licenceserver.pdf</Typography>
        <Typography variant="body1" component='a' href='https://docs.linaroforge.com/22.1.3/userguide-forge.pdf' sx={{fontWeight:'500',mb:1,fontSize:'14px',textDecoration:'none',color:'#2596be'}}>https://docs.linaroforge.com/22.1.3/userguide-forge.pdf</Typography>
        <Typography variant="h6" sx={{mt:5,fontWeight:'600'}}>Html</Typography>
        <Typography variant="body1" component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/index.html' sx={{mt:4,fontWeight:'500',mb:1,fontSize:'14px',textDecoration:'none',color:'#2596be'}}>https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/index.html</Typography>
        <Typography variant="body1" component='a' href='https://docs.linaroforge.com/22.1.3/html/101169_arm-licence-server-user-guide/index.html' sx={{fontWeight:'500',mb:1,fontSize:'14px',textDecoration:'none',color:'#2596be'}}>https://docs.linaroforge.com/22.1.3/html/101169_arm-licence-server-user-guide/index.html</Typography>
        <Typography variant="body1" component='a' href='https://docs.linaroforge.com/22.1.3/html/101532_arm-map-metric-plugin-interface/index.html' sx={{fontWeight:'500',mb:1,fontSize:'14px',textDecoration:'none',color:'#2596be'}}>https://docs.linaroforge.com/22.1.3/html/101532_arm-map-metric-plugin-interface/index.html</Typography>
        </Grid>
    </List> */}

    <Footer/>
    </Grid>
    </ThemeProvider>
  )
}

export default Documentation;