import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroText = () => {
  return (
    <Box sx={{backgroundColor:'#c9ced2',display:'flex',flexDirection:'column'}}>
  <Typography variant='caption' fontWeight={100} fontSize={16}  p={4}  sx={{width:'50%',display:'flex',mx:'auto',}}>
  “With Arm DDT, debugging is fast and enjoyable. It’s easy to just pick up
– it is outstanding for debugging multithreaded and parallel software.”
  </Typography >
  <Typography variant="subtitle1" fontWeight={100} fontSize={12}  p={2}  sx={{display:'flex',mx:'auto',}}>
  Neil Catling, Chief Software Scientist CGG
  </Typography>
    </Box>
  )
}

export default HeroText;
