import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../../Navbar/index';


const DownloadHeroCard= () => {
  return (
    <><Navbar/>
    <Card sx={{ display: 'flex',backgroundColor:'white',color:'red',width:'100%' ,height:'350px',position:'relative'}}>
      
        <CardMedia
                component="img"
                 sx={{filter:"brightness(30%)" }}
                image='/images/toolchain_72-1-.jpg'
                alt="Live from space album cover"
        />
        <div style={{position: "absolute", color: "white",top: 100,left: "50%",transform: "translateX(-50%)",display:'flex',flexDirection:'column',fontSize:'40px'}}> 
        <div  style={{color: "white",marginLeft:'70px'}}>Download Linaro Forge</div>
        <div style={{color: "#9bcc4c"}}>Development Tools & Software</div>
        </div>
       
    </Card>
    </>
  )
}

export default DownloadHeroCard;