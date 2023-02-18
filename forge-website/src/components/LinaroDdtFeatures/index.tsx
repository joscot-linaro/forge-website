import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DdtFeatures from '../../../content/JsonFiles/LinaroDdtFeatures.json';

const LinaroDdtFeatures = () => {
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,backgroundColor:'#e6e6e6',}}>
        <Grid sx={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h5" noWrap sx={{mb:2,mt:2,mx: 'auto'}}>What is Linaro DDT</Typography>
            <Typography variant="subtitle1" fontWeight={100} fontSize={12}  p={2}  sx={{width:'50%',display:'flex',mx:'auto',}}>
            Linaro DDT is a powerful parallel debugger, available standalone or as part of the Linaro Forge debug and profile suite. Its
            intuitive graphical interface provides automatic detection of memory bugs and divergent behavior at all scales.
            </Typography>
        </Grid>
    <Grid container  spacing={2} sx={{width:'80%',display:'flex',mx:'auto'}}  >
          <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
  {DdtFeatures.map((item)=>(
<Card   
key={item.Title}
        sx={{
            // maxWidth: 345,
             backgroundColor: 'white',
             m:4,
             width: '250px',
    //  height:'300px',
        }}>
           <CardContent sx={{color:'black', display:'flex',justifyContent:'center',
        flexDirection:'column'}}>
              <Typography variant="subtitle1" display="block" sx={{mx:'auto',fontWeight:'bold',fontSize:'15px',p:.5,display:'flex',justifyContent:'center'}}>{item.Title}</Typography>
  <Typography variant="body2" display="block" sx={{mx:'auto',fontSize:'14px'}} >{item.Description}</Typography>
        </CardContent>
          </Card>
  ))}
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  )
}

export default LinaroDdtFeatures;