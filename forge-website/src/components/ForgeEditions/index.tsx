import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ForgeEditionTable from "../ForgeEditionTable/index";
import useMediaQuery from "@mui/material/useMediaQuery";

const ForgeEditions = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        backgroundColor: "white",
        mt: 2,
      }}
    >
      <Typography
        variant="h5"
        noWrap
        sx={{
          mb: 5,
          mt: 2,
          mx: "auto",
          fontWeight: "600",
          fontSize: isMobile ? "1.25rem" : "1.5rem",
        }}
      >
        Linaro Forge Editions
      </Typography>
      <ForgeEditionTable />
    </Grid>
  );
};

export default ForgeEditions;
