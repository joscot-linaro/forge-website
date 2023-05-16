import React from 'react';
import Typography from '@mui/material/Typography';
import aboutForge from '../../../content/JsonFiles/aboutForge.json';
import { aboutForgeBody } from '../../hooks/pagesData';
import Grid from '@mui/material/Grid';
import CardContainer from '../../components/About/CardContainer';

const AboutCards = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: { sm: 'column', md: 'column', lg: 'row' },
            width: '100%',
            margin: { xs: '0 auto', sm: '0 auto', md: 0 },
            padding: { xs: '26px' },
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: '-webkit-center'

        }}>
            <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2002</Typography>
                <CardContainer data={aboutForge[0]} cardHeight={500} />
            </Grid>
            <Grid item xs={12} sm={8} >
                <Grid container sx={{ display: 'flex', flexDirection: { sm: 'column', md: 'column', lg: 'row' }, justifyContent: 'center', width: { xl: '80%' } }}>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', p: { lg: 2, md: 0 }, mt: { xs: 2, md: 0 }, alignSelf: { md: 'center', xs: 'center ' }, alignItems: { md: 'center', xs: 'center ' } }}>
                        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2016</Typography>
                        <CardContainer data={aboutForge[1]} cardHeight={275} />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', p: { lg: 2, md: 0 }, alignSelf: { md: 'center', xs: 'center ' }, mt: { xs: 2, md: 0 } }}>
                        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 600, color: '#9bcc4c' }}>2023</Typography>
                        <CardContainer data={aboutForge[2]} cardHeight={275} />
                    </Grid>
                    <Grid item sx={{
                        width: { xl: '80%', lg: '87%', xs: '100%' },
                        border: '5px solid #e2eec1',
                        mt: { lg: 0, md: 2, xs: 2 },
                        p: { lg: 2, xs: 0 },
                        alignSelf: { xs: 'center', md: '' }

                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'center', fontWeight: 600 }}>About Linaro</Typography>
                        <Typography variant="body1" sx={{ mx: 'auto', ml: { lg: 2, xs: 0 }, p: { lg: 3, xs: 0 }, fontWeight: '500', textAlign: 'center', width: '100%' }}>{aboutForgeBody}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutCards;