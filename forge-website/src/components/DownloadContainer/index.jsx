import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";

const DownloadContainer = () => {
    const router = useRouter();
    return (
        <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0' }, maxWidth: { xs: '100%', md: '100%' }, }}>
            <Box xs='auto' md={4} sx={{ backgroundColor: '#e6e6e6', mb: 1, p: 2, width: { xs: '100%', md: '100%', lg: '75%' } }}>
                <Typography variant="subtitle2" sx={{ mb: 2, mt: 2, mx: 'auto' }}>Download your free trial of Linaro Forge or contact us
                    for more information.</Typography>
                <Button sx={{ backgroundColor: 'white', borderColor: '#f28630', fontSize: '14px', color: 'black', fontWeight: '600' }} onClick={() => router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
            <Box sx={{ backgroundColor: '#e6e6e6', p: 2, width: { xs: '100%', md: '100%', lg: '75%' } }}>
                <Button onClick={() => router.push("/contactUs")} sx={{ backgroundColor: 'white', borderColor: '#9bcc4c', fontSize: '14px', color: 'black', fontWeight: '600' }} variant="outlined">Contact us today</Button></Box>
        </Grid>
    )
}

export default DownloadContainer;