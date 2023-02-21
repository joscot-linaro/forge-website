import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import ContactHeroCard from '../../components/HeroCard/ContactHeroCard/index';
import { useRouter } from "next/router";
import HeaderBar from '../../components/HeaderBar/index';
import jwt from 'jsonwebtoken';

const contact = () => {
  const router = useRouter();
  const[secretKey,setSecretKey]=useState('snorkel4-lair0-nicotine-Barrette-Foothill3-1Amulet-3pigeon-upstart');
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Country:"",
    Job_title:"",
    Company:"",
    Email:"",
    Tel_Number:"",
    Linaro_Forge:false,
    Linaro_Compiler:false,
    Linaro_Performance:false
  });
  const handleCheckboxInput=(e)=>{
    const fieldName = e.target.name;
    const fieldValue = e.target.checked;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }
  async function postData(url ) {
    try{
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
    });
    const jwtData = await response.body;
    return jwtData;
    }catch(err){
      console.log(err);
    }

 }

const submitForm=(e)=> {
  e.preventDefault();
  var token = jwt.sign(formData,secretKey,{
    expiresIn: "1h" ,  // expires in 1 hour
    issuer:'ContactUs'
  });
  const res=postData(`https://u656cu4cq8.execute-api.eu-west-2.amazonaws.com/stage/isthisworking?token=${token}`)
  if(res.status===0){
    router.push('/contactUs/thanks')
     }
}
  return (
    <>
     <Grid flexGrow={2} sx={{backgroundColor:'white',
      boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
      , }} >
    <HeaderBar />
      <ContactHeroCard/>
      <Grid container  spacing={2} sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}} >
      <Grid item xs={6}>
     <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'70%',mt:4,}}>
     <Typography variant="h5" sx={{mt:2,fontWeight:'600'}}>Request a Call Back</Typography>
     <Typography variant="caption"  sx={{mt:4,borderBottom:'1px solid #e6e6e6',pb:3}}>Please provide your details in the fields opposite and we
     will call you back as soon as possible.</Typography>
     </Grid>
     </Grid>
     <Grid item xs={6} sx={{width:'100%'}}>
     <Box    
     component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor:'#e6e6e6',ml:{xs:'8%',md:'0'},height:'100%',p:{md:'5%',},
         display:'flex',
         width:{xs:'700px',md:'90%'}
    
      }}
      autoComplete="off">
        <Grid style={{display:'flex',flexDirection:'column',padding:'20px',}}>
        <TextField
          required
          id="outlined-name-input"
          name='Name'
          placeholder="Name"
          InputProps={{ sx: { height: 40 } }}
           sx={{backgroundColor:'white',width:'60% !important',mt:6}}
           value={formData.Name}
           onChange={handleInput}
        />
         <TextField
          required
          id="outlined-LastName-input"
          name='LastName'
          placeholder="Last name"
          InputProps={{ sx: { height: 40 } }}
          sx={{backgroundColor:'white',width:'60% !important'}}
          onChange={handleInput}
          value={formData.LastName}
        />
          <TextField
          required
          id="outlined-Job-title-input"
          placeholder="Job title"
          name='Job_title'
          InputProps={{ sx: { height: 40 } }}
          sx={{backgroundColor:'white',width:'60% !important'}}
          value={formData.Job_title}
          onChange={handleInput}
        />
          <TextField
          required
          id="outlined-Company-input"
          name="Company"
          placeholder="Company"
          InputProps={{ sx: { height: 40 } }}
          sx={{backgroundColor:'white',width:'60% !important'}}
          value={formData.Company}
          onChange={handleInput}
        />
        <Typography variant='caption' sx={{fontSize:'14px',width:'70%'}}>Note: your temporary license will be sent to this
        email address.</Typography>
       <TextField
          required
          name='Email'
          type='email'
          id="outlined-email-input"
          placeholder="Corporate email address"
          InputProps={{ sx: { height: 40 } }}
          sx={{backgroundColor:'white',width:'60% !important'}}
          value={formData.Email}
          onChange={handleInput}
        />
           <TextField
          required
          id="outlined-Telephone-input"
          type='number'
          name='Tel_Number'
          placeholder="Telephone number"
          InputProps={{ sx: { height: 40 } }}
          sx={{backgroundColor:'white',}}
          value={formData.Tel_Number}
          onChange={handleInput}
        />
            <TextField
          required
          id="outlined-country-input"
          name='Country'
          InputProps={{ sx: { height: 40 } }}
          placeholder="Select Country"
          sx={{backgroundColor:'white',width:'60% !important'}}
          value={formData.Country}
          onChange={handleInput}
        />
                <Typography variant='body1' style={{fontSize:'14px'}}>Which product(s) are you interested in?</Typography>
          <FormGroup sx={{mt:3}}>
      <FormControlLabel  control={<Checkbox name='Linaro_Forge' checked={formData.Linaro_Forge} onChange={handleCheckboxInput} />}
       label={<Typography style={{fontSize:'14px'}}>Linaro Forge (includes Linaro DDT, Linaro MAP
        and Linaro Performance Reports)</Typography>}
        />
      <FormControlLabel control={<Checkbox name='Linaro_Compiler' checked={formData.Linaro_Compiler} onChange={handleCheckboxInput} />}
      label={<Typography style={{fontSize:'14px'}}>Linaro Compiler for Linux</Typography>}
       />
      <FormControlLabel control={<Checkbox name='Linaro_Performance' checked={formData.Linaro_Performance} onChange={handleCheckboxInput}  />}
      label={<Typography style={{fontSize:'14px'}}>Linaro Performance Libraries</Typography>}
       />
    </FormGroup>
    <Typography variant='body1' style={{fontSize:'14px'}}>Linaro will process your information in accordance
      with our Privacy Policy.</Typography>
      <Button type='submit' onClick={submitForm} sx={{border:'2px solid #9bcc4c',color:'black',fontWeight:'500',width:'100px',mt:3}}>Submit</Button>
        </Grid>
      </Box>
        </Grid>
          </Grid>
      </Grid>
      </>
   
  )
}

export default contact