import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderText = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        noWrap
        sx={{
          mt: 2,
          p: 2,
          mx: "auto",
          fontWeight: "600",
          fontSize: isMobile ? "1.25rem" : "1.5rem",
        }}
      >
        Optimize on any Platform with Linaro Forge
      </Typography>
      <Typography
        variant="caption"
        noWrap
        sx={{ fontSize: "13px", mx: "auto", mb: 2 }}
      >
        Efficient application development for Linux Server and HPC with full
        technical support from Linaro Forge experts.
      </Typography>
    </Grid>
  );
};

export default HeaderText;
