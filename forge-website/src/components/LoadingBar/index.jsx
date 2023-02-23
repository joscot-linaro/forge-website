import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex',mx:'auto',justifyContent:'center',mt:3,mb:3, }}>
      <CircularProgress style={{color:'#9bcc4c'}} />
    </Box>
  );
}