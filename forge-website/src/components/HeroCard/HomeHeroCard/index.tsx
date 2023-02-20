import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../../Navbar/index';


const HomeHeroCard= () => {
  return (
    <Card sx={{ display: 'flex',width:'100%' ,height:'350px',borderRadius:0,position:'relative'}}>
      
        <CardMedia
                component="img"
                 sx={{filter:"brightness(30%)",position:'relative' }}
                image='/images/toolchain_72-1-.jpg'
                alt="Live from space album cover"
        />
        <Navbar />
        <div style={{position: "absolute", color: "white",top: 100,left: "50%",transform: "translateX(-50%)",display:'flex',flexDirection:'column',fontSize:'40px'}}> 
        <div  style={{color: "white",marginLeft:'140px'}}>Linaro Forge</div>
        <div style={{color: "#9bcc4c"}}>Development Tools & Softwares</div>
        </div>
       
    </Card>
  )
}

export default HomeHeroCard;