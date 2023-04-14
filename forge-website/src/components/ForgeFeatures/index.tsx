import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ForgeFeaturesBenefits from "../../../content/JsonFiles/ForgeFeaturesBenefits.json";
import useMediaQuery from "@mui/material/useMediaQuery";

const ForgeFeatures = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        backgroundColor: "#e6e6e6",
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
        Features and Benefits
      </Typography>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            mx: { md: "auto" },
            width: { sm: "100%", md: "70%" },
          }}
        >
          {ForgeFeaturesBenefits.map((item) => (
            <Card
              key={item.Title}
              sx={{
                backgroundColor: "white",
                m: 4,
                width: "260px",
                height: "350px",
              }}
            >
              <CardContent
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "left",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  display="block"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  {item.Title}
                </Typography>
                <Typography
                  variant="body2"
                  display="block"
                  sx={{ mx: "auto", fontSize: "14px" }}
                >
                  {item.Description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default ForgeFeatures;
