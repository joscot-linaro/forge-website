import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinaroPerformances from "../../../content/JsonFiles/LinaroPerformances.json";

const LinaroPrFeatures = () => {
    return (
        <Grid
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
                backgroundColor: "#e6e6e6",
                width: "100%",
            }}
        >
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                    variant="h5"
                    sx={{ mb: 2, mt: 4, mx: "auto", fontWeight: "600" }}
                >
                    What is Linaro Performance Reports?
                </Typography>
                <Typography
                    variant="body1"
                    fontSize={16}
                    p={2}
                    sx={{
                        width: "60%",
                        display: "flex",
                        mx: "auto",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    Linaro Performance Reports builds upon Linaro MAP technology by
                    condensing the performance information into a short easily readable
                    report, suitable for understanding application performance when the
                    source code is unavailable or as a starting point before using tools
                    such as Linaro MAP.
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{ width: "80%", display: "flex", mx: "auto" }}
            >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {LinaroPerformances.map((item) => (
                            <Card
                                key={item.Title}
                                sx={{
                                    backgroundColor: "white",
                                    m: 4,
                                    width: "250px",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        color: "black",
                                        display: "flex",
                                        //justifyContent: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        display="block"
                                        sx={{
                                            //mx: "auto",
                                            fontWeight: "bold",
                                            fontSize: "15px",
                                            p: 0.5,
                                            //display: "flex",
                                            textAlign: 'left'
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
        </Grid>
    )
}

export default LinaroPrFeatures;