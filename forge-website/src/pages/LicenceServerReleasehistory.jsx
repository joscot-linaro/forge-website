import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { getSortedPostsData } from '../lib/licenseReleaseHistory';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { marked } from 'marked';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },

  };
}

const LicenceServerReleasehistory = ({ allPostsData }) => {
  const [isExpanded, setIsExpanded] = useState(true);
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
      <Navbar />
      <Grid>
        <Grid sx={{ width: '100%', mt: 2, minHeight: { md: '93.5vh' } }}>
          <Grid container rowSpacing={1} sx={{ flexDirection: 'column', p: 3, }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          </Grid>
          <Grid sx={{ pl: 6, mt: 10 }}>
            {allPostsData.map((item, index) => (
              <List key={index} >
                <ListItem button onClick={() => setIsExpanded(!isExpanded)} sx={{ display: 'flex', flexDirection: 'row', mb: 2, justifyContent: 'flex-start', width: { sm: '80%', md: '35%', xs: '100%' } }}>
                  {isExpanded ? <RemoveSharpIcon style={{ color: '#2596be' }} /> : <AddSharpIcon style={{ color: '#2596be' }} />}
                  <ListItemText style={{ fontSize: '1.5rem' }} primary={item.frontmatter.title} />
                </ListItem>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Typography dangerouslySetInnerHTML={{ __html: marked(item.content) }} />
                  </List>
                </Collapse>
              </List>

            ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}
export default LicenceServerReleasehistory;