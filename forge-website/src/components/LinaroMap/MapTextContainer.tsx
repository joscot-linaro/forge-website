import { Box, List, ListItem } from "@mui/material";
import React from "react";
import { forgePerformanceItems } from "../../hooks/pagesData";

const TextContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        mb: 1,
        // p: 1,
        mt: { lg: 2 },
        width: { xs: "100%", md: "95%" },

        pl: { xs: "2", md: "37%" },
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <List
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
        {forgePerformanceItems.map((item) => (
          <ListItem key={item} sx={{ display: "list-item", mb: -1 }}>
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TextContainer;