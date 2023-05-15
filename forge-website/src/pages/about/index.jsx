import React from 'react';
import Grid from '@mui/material/Grid';
import HeroCardName from '../../components/HeroCard/HeroCardName';
import AboutHeader from '../../components/About/aboutHeader';
import AboutCards from '../../components/About/aboutCards';
import ContactButtons from '../../components/About/ContactButtons';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <Grid>
            <HeroCardName title_1={'About Linaro Forge'} title_2={'Development Tools & Software'} />
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '80%',
                    mt: 2,
                    my: '0 auto',
                    margin: '0 auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <AboutHeader />
                <AboutCards />
                <ContactButtons />

            </Grid>
            <Footer />
        </Grid>
    )
}

export default About;