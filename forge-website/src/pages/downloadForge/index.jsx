import React from 'react';
import HeroCardName from '../../components/HeroCard/HeroCardName/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DownloadTable from '../../components/DownloadTable/index';
import Button from "@mui/material/Button";
import InstallForge from '../../components/installForge/index';
import ArmForgeToolsLinks from '../../components/ArmForgeToolsLinks/index';
import TalkAndContact from '../../components/TalkAndContact/index';
import { useRouter } from "next/router";
import Footer from '../../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const DownloadForge = () => {
  const buttonTitles = [{ name: 'Older versions of Linaro Forge', to: '/downloadForge_OldVersion' }, { name: 'Linaro License Server', to: '/licenseServer' }, { name: 'Third Party Source Code', to: '/DownloadThirdPartySourceCode' }, { name: 'Supported platforms', to: 'https://docs.linaroforge.com/latest/html/101136_arm-forge-user-guide/supported_platforms/index.html' },
  { name: 'User guide', to: 'https://docs.linaroforge.com/latest/html/101136_arm-forge-user-guide/index.html' }, { name: 'Linaro Forge Release History', to: '/ReleaseHistory' }];
  const router = useRouter();
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  return (
    <ThemeProvider theme={formtheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CssBaseline />
      <Grid>
        <HeroCardName title_1={'Download Linaro Forge'} title_2={'Development Tools & Software'} />
        <Grid sx={{ width: '100%', mt: 2, }}>
          <Grid container rowSpacing={1} sx={{ flexDirection: 'column', p: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: '600' }}>Download Linaro Forge</Typography>
            <Typography variant="body1" sx={{ mt: 2, }}>Linaro Forge includes a graphical debugger, parallel profiler, and an application performance reports tool.</Typography>
            <Typography variant="body1" sx={{ mt: 2, }}>Download the packages you require for your operating system and architecture. If you have any issues installing or configuring Forge, please contact <a href="mailto:support@forge.linaro.com">Forge Support</a>.</Typography>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: '600' }}>Download</Typography>
            <Typography variant="body1" sx={{ mt: 2, }}>Windows and macOS builds are remote clients only. They allow you to connect to a remote system and debug or profile. The
              remote clients cannot debug or profile programs on Windows and macOS. Linux downloads also function as remote clients.</Typography>
          </Grid>
          <DownloadTable />
          <Box sx={{ overflowX: 'auto', minWidth: 0 }}>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                mx: { md: 'auto' },
              }}
            >
              {buttonTitles.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => router.push(item.to)}
                  sx={{
                    color: 'white',
                    background: '#23b1da',
                    m: 2,
                    borderRadius: 3,
                    width: 'auto',
                    fontSize: '14px',
                    '@media (max-width: 768px)': {
                      width: 'auto',
                      fontSize: '12px',
                      padding: '8px 40px',
                    },
                    '&:hover': { color: '#23b1da' },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Grid>
          </Box>

          <InstallForge />
          <ArmForgeToolsLinks />
        </Grid>
        <TalkAndContact backColor={'#e6e6e6'} />
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default DownloadForge;