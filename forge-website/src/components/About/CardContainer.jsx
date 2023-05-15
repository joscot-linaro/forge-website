import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

const CardContainer = ({ data }) => {
    return (
        <Card
            key={data.Title}
            sx={{
                backgroundColor: "#e6e6e6",
                // mt: { lg: 4, md: 4, xs: 4 },
                width: { md: 250, xs: '100%', sm: '100%' },
                textAlign: 'left'
                // height: 350
            }}
        >
            <CardContent
                sx={{
                    color: "black",
                    display: "flex",
                    // justifyContent: "center",
                    flexDirection: "column",
                    textAlign: 'left'
                }}
            >
                <Typography
                    variant="subtitle1"
                    display="block"
                    sx={{
                        mx: "auto",
                        fontWeight: "bold",
                        fontSize: "15px",
                        p: 0.5,
                        display: "flex",
                        textAlign: 'left'
                    }}
                >
                    {data.Title}
                </Typography>
                <Typography
                    variant="body2"
                    display="block"
                    sx={{ mx: "auto", fontSize: "14px" }}
                >
                    {data.Description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardContainer;