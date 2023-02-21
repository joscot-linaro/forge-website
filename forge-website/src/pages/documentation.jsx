import React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DocumentationHeroCard from '../components/HeroCard/DocumentationHeroCard/index';
import HeaderBar from '../components/HeaderBar/index';

const Documentation = () => {
  return (
    <Grid>
      <HeaderBar/>
        <DocumentationHeroCard />
    <List style={{disply:'flex',flexDirection:'column',padding:'30px',fontFamily:'sans-serif'}}>
        <h3>Technical specs</h3>
        <h3 style={{marginTop:'12px'}}>User guide</h3>
    </List>
    </Grid>
  )
}

export default Documentation;