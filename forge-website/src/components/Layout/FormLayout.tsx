import { Box, Grid } from "@mui/material";
import React from "react";
import DownloadContainer from "../DownloadContainer";
import TextContainer from "../LinaroMap/MapTextContainer";

function ContentLayout({ children }: { children: JSX.Element }) {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        // margin: "0 auto",
        flexDirection: { md: "row", xs: "column" },
      }}
      columnSpacing={{ xs: 1, sm: 2, md: 0 }}
    >
      <Grid item xs={6} sx={{ maxWidth: { xs: "85%" } }}>
        <TextContainer />
      </Grid>
      <Grid item xs={6} sx={{ maxWidth: { xs: "100%" } }}>
        <DownloadContainer />
      </Grid>
    </Grid>
  );
}

export default ContentLayout;
