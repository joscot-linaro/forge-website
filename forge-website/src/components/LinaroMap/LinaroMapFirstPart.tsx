import React from "react";
import DownloadContainer from "../../components/DownloadContainer/index";
import { Grid } from "@mui/material";
import TextContainer from "./MapTextContainer";
const LinaroMapFirstPart = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{
        mx: "auto",
        flexDirection: { xs: "column", md: "row" },
        mt: 2,
        alignItems: { xs: "center" },
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
