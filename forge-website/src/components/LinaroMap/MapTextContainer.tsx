import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const TextContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        mb: 1,
        mt: { lg: 2 },
        width: { xs: "100%", md: "95%" },

        pl: { xs: "2", md: "10%", lg: "20%" },
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Grid
        sx={{
          listStyleType: "disc",
          pl: { xs: "2%", md: "5%", lg: "10%" },
          pb: { md: "40px" },
          width: { xs: "100%", md: "100%", fontSize: "14px" },
          "@media (min-width: 920px)": {
            width: "100%",
          },
        }}
      >
        <Typography variant="subtitle2" sx={{}}>
          Linaro MAP provides an easy to understand view of where your program
          is spending its time, within minimal runtime overhead whether
          profiling a single process or at exascale. Supporting C++, C, Fortran
          parallel and threaded applications on CPUs, GPUs, x86-64 and Arm
          AArch64, Linaro MAP can be used by scientists and software engineers
          to understand how their programs are performing and help get the most
          out of their computational resources.
        </Typography>
      </Grid>
    </Box>
  );
};

export default TextContainer;
