import React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DocumentationHeroCard from '../components/HeroCard/DocumentationHeroCard/index';
import HeaderBar from '../components/HeaderBar/index';
import Typography from '@mui/material/Typography';

const Documentation = () => {
  return (
    <Grid>
      <HeaderBar/>
        <DocumentationHeroCard />
    <List style={{disply:'flex',flexDirection:'column',padding:'30px',fontFamily:'sans-serif'}}>
        <Typography variant="h6" sx={{mt:3,fontWeight:'600'}} >Technical specs</Typography>
        <Typography variant="h6" sx={{mt:8,fontWeight:'600'}}>User guide</Typography>
    </List>
    </Grid>
  )
}

export default Documentation;