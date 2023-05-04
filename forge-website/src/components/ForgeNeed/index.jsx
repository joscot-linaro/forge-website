import React from "react";
import DownloadContainer from '../DownloadContainer/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from "@mui/material/useMediaQuery";
import FormTextLayout from '../Layout/FormTextLayout';
import { homeHeaderText } from '../../hooks/pagesData';

const ForgeNeed = () => {

  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, borderColor: 'white', mt: 2, mb: 8, mx: 'auto', }}>
        <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 4, mx: 'auto', fontWeight: '600', fontSize: isMobile ? "1.25rem" : "1.5rem" }}>Everything you need</Typography>
        <Grid container rowSpacing={1} sx={{ mx: 'auto', flexDirection: { xs: 'column', md: 'row' }, mt: 2, alignItems: { xs: "center" } }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          <Grid item xs={6} sx={{ maxWidth: { xs: "85%" } }} >
            <FormTextLayout strData={homeHeaderText} />
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: { xs: "90%" } }}>
            <DownloadContainer />
          </Grid>
        </Grid>
      </Grid >
    </>
  )
}

export default ForgeNeed;