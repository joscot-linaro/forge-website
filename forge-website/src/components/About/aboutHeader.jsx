import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { aboutHeaderText } from '../../hooks/pagesData';

const AboutHeader = () => {
    return (
        <Grid sx={{
            width: { lg: '87%', xl: '77%' },
            border: '5px solid lightgrey',
            mt: 5,
            p: { md: 4, xs: 2 }
        }}>
            <Typography variant="h5" sx={{ mx: 'auto', ml: { lg: 2, xs: 0 }, p: { md: 3, xs: 0 }, fontWeight: '500', textAlign: 'center', width: '100%' }}>{aboutHeaderText}</Typography>
        </Grid>
    )
}

export default AboutHeader;