import { List } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface FormTextLayoutProps {
  strData: string;
}

const FormTextLayout = ({ strData }: FormTextLayoutProps) => {
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
          {strData}
        </Typography>
      </Grid>
    </Box>
  );
};

export default FormTextLayout;
