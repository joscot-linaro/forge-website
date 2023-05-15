import React from 'react';
import Typography from '@mui/material/Typography';
import aboutForge from '../../../content/JsonFiles/aboutForge.json';
import { aboutForgeBody } from '../../hooks/pagesData';
import Grid from '@mui/material/Grid';
import CardContainer from '../../components/About/CardContainer';

const AboutCards = () => {
    return (
        <Grid container sx={{
            display: 'flex', flexDirection: { sm: 'column', md: 'column', lg: 'row' },
            width: '100%',
            // maxWidth: { xs: '400px', sm: '100%', md: '100%' },
            margin: { xs: '0 auto', sm: '0 auto', md: 0 },
            padding: { xs: '26px', },
            justifyContent: { xs: 'center', sm: 'center', md: 'center' },
            alignItems: 'center',
            textAlign: '-webkit-center'

        }}>
            <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2002</Typography>
                <CardContainer data={aboutForge[0]} />
            </Grid>
            <Grid item xs={12} sm={8} >
                <Grid container sx={{ display: 'flex', flexDirection: { sm: 'column', md: 'column', lg: 'row' }, }}>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', mt: 0, p: { lg: 2, md: 0 }, mt: { xs: 2 }, alignSelf: { md: 'center', xs: 'center ' }, alignItems: { md: 'center', xs: 'center ' } }}>
                        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2016</Typography>
                        <CardContainer data={aboutForge[1]} />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', mt: 0, p: { lg: 2, md: 0 }, alignSelf: { md: 'center', xs: 'center ' }, mt: { xs: 2 } }}>
                        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2023</Typography>
                        <CardContainer data={aboutForge[2]} />
                    </Grid>
                    <Grid sx={{
                        width: '100%',
                        border: '5px solid #9bcc4c',
                        mt: { lg: 0, md: 2, xs: 2 },
                        p: 0
                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: 600 }}>About Linaro</Typography>
                        <Typography variant="body1" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '500', textAlign: 'center', width: '100%' }}>{aboutForgeBody}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutCards;




