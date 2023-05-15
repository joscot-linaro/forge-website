import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import LinaroPrFeatures from "@/src/components/LinaroPrFeatures/index";
import TalkAndContact from "@/src/components/TalkAndContact/index";
import HeroCardName from "@/src/components/HeroCard/HeroCardName/index";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Footer from "@/src/components/Footer/index";
import DownloadContainer from "@/src/components/DownloadContainer/index";
import { PrFeatures, linaroPerformanceText } from "../../hooks/pagesData";
import FormTextLayout from "@/src/components/Layout/FormTextLayout";

const LinaroPerformanceReports = () => {
  return (
    <Grid>
      <HeroCardName
        title_1={"Linaro Performance Reports"}
        title_2={"Development Tools & Software"}
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
          borderColor: "white",
          mt: 2,
          mb: 8,
          mx: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
            mt: 4,
            mx: "auto",
            fontWeight: "600",
            fontSize: "1.5rem",
            padding: { xs: 2 },
          }}
        >
          Your First Stop For Performance Analysis
        </Typography>
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
            <FormTextLayout strData={linaroPerformanceText} />
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: { xs: "90%" } }}>
            <DownloadContainer />
          </Grid>
        </Grid>
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
          <Grid
            item
            xs={6}
            sx={{
              mx: { xs: "auto", md: "0" },
              maxWidth: { xs: "100%" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                mx: { xs: "auto", md: "0", lg: 0 },
                maxWidth: { xs: "100%" },
              }}
              image="/images/PR_page_image.jpg"
              alt="Linaro Performance image"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              padding: 4,
              mx: { xs: "auto", md: "0" },
              maxWidth: { xs: "100%" },
            }}
          >
            <Typography
              variant="h5"
              sx={{ mx: "auto", ml: 2, p: 3, fontWeight: "600" }}
            >
              Linaro Performance Reports Gives a High-Level Analysis
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 7, fontSize: "14px" }}>
              {PrFeatures.map((item) => (
                <ListItem key={item} sx={{ display: "list-item" }}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <LinaroPrFeatures />
        <TalkAndContact backColor={"white"} />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default LinaroPerformanceReports;
