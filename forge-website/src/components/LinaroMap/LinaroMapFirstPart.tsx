import React from "react";
import DownloadContainer from "../../components/DownloadContainer/index";
import { Grid } from "@mui/material";
import TextContainer from "./MapTextContainer";
const LinaroMapFirstPart = () => {
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
      <Grid item xs={6} sx={{ maxWidth: { xs: "90%" } }}>
        <DownloadContainer />
      </Grid>
    </Grid>
  );
};

export default LinaroMapFirstPart;
