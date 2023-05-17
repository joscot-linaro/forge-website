import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";
import Box from '@mui/material/Box';

const ContactButtons = () => {
    function sendEmail(receiverEmail) {
        // Email details
        var recipient = receiverEmail;
        var subject = 'Forge Contact';
        var body = '';

        // Construct the mailto URL
        var mailtoUrl = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        // Open the email client
        if (typeof window !== 'undefined') {
            window.location.href = mailtoUrl;
        }
    }
    const router = useRouter();

    const contactButtons = [{ contact: 'Email Sales', contactLink: 'sales@forge.linaro.com' }, { contact: 'Email Support', contactLink: 'support@forge.linaro.com' }];
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', mt: 5, width: '100%' }}>
            <Typography variant='h5' sx={{ textAlign: 'center', }}>Learn how Linaro Forge can accelerate your software development</Typography>
            <Box sx={{ overflowX: 'auto', minWidth: 0 }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 2, mx: { md: 'auto' }, }}>
                    <Button onClick={() => router.push('/contactUs')} sx={{
                        fontSize: '16px', mx: 'auto', display: 'flex', justifyContent: 'center', border: '2px solid #9bcc4c', borderRadius: 3, color: 'black', mb: 2, fontWeight: '600', mt: 2, pt: 1, '@media (max-width: 768px)': {
                            width: 'auto',
                            m: 2,
                            fontSize: '12px',
                            padding: '8px 40px',
                        },
                        '&:hover': { color: '#9bcc4c' },
                    }} >Contact Us</Button>
                    {contactButtons.map(item => (
                        <Button key={item.contact} onClick={() => sendEmail(item.contactLink)} sx={{
                            fontSize: '16px', mx: 'auto', display: 'flex', justifyContent: 'center', border: '2px solid #9bcc4c', borderRadius: 3, color: 'black', mb: 2, fontWeight: '600', mt: 2, pt: 1, '@media (max-width: 768px)': {
                                width: 'auto',
                                m: 2,
                                fontSize: '12px',
                                padding: '8px 40px',
                            },
                            '&:hover': { color: '#9bcc4c' },
                        }} >{item.contact}</Button>
                    ))}


                </Grid>
            </Box>
            <CardMedia
                component="img"
                sx={{ height: '60%', width: { xl: '77%', lg: '87%', xs: '100%' }, mt: 2, mb: 4, alignSelf: 'center' }}
                image='/images/ABOUT_page_image.jpg'
                alt="About image"
            />
        </Grid>
    )
}

export default ContactButtons;