import React,{useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';



const ForgePlatforms = ({id,platName, title,description,bordercolor,backcolor,icon }) => {
  const colorRef = useRef();

  // useEffect(()=>{
  //   if(platName=='Profile'){
  //     colorRef.current?.Button.sx.borderColor='#9bcc4c'
  //   }
    // else if(platName=='Debug'){
    //   colorRef.current?.style.backgroundColor='#c91436'
    // }
    // else{
    //   colorRef.current?.style.backgroundColor='#f28630'
    // }
    //  },[platName]);
    console.log('back',icon)

  return (
    <>
    <Card   
    key={id}
     ref={colorRef}
			sx={{
				// maxWidth: 345,
				 backgroundColor: backcolor,
         border:`2px solid`,
         borderColor:bordercolor,
				 m:4,
				 width: '250px',
        //  height:'350px',
			}}>
        <CardMedia
                component="img"
                sx={{width:50,mx:'auto',mt:2}}
                //  sx={{filter:"brightness(30%)" }}
                image={icon}
                alt="Live from space album cover"
        />
        {/* <CardActionArea> */}
        <CardContent sx={{color:'black', display:'flex',justifyContent:'center',
          flexDirection:'column'}}>
        <Typography variant="body1" sx={{mx:'auto',fontWeight:'700',fontSize:'12px'}} noWrap>{platName}</Typography>
    <Typography variant="subtitle1" display="block" sx={{mx:'auto',fontWeight:'bold',fontSize:'17px',p:.5,display:'flex',justifyContent:'center'}}>{title}</Typography>
    <Typography variant="body2" display="block" sx={{mx:'auto',fontSize:'14px'}} >{description}</Typography>
    
        </CardContent>
        
        {/* </CardActionArea> */}
        <Button ref={colorRef}  sx={{fontSize:'12px',mx:'auto',display:'flex',justifyContent:'center',border:'2px solid',borderColor:bordercolor,borderRadius:3,color:'black',mb:2,fontWeight:'600',mt:2}} >Learn more</Button>
   
    </Card> 
    </>
  )
}

export default ForgePlatforms;