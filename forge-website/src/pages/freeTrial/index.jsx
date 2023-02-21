import React,{useState,useMemo} from 'react';
import TrialHeroCard from '../../components/HeroCard/TrialHeroCard/index';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import FreeTrialContentText from '../../components/FreeTrialContentText/index';
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";
import HeaderBar from '../../components/HeaderBar/index';
import countryList from 'react-select-country-list';

const FreeTrial = () => {
  const router = useRouter();
  const options = useMemo(() => countryList().getData(), []);
  const[secretKey,setSecretKey]=useState('snorkel4-lair0-nicotine-Barrette-Foothill3-1Amulet-3pigeon-upstart');
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Country:"",
    Job_title:"",
    Company:"",
    Email:"",
    Tel_Number:"",
  });

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
    const jwtData = await response;
    return jwtData;
    }catch(err){
      console.log(err);
    }

 }

const submitForm=async(e)=> {
  e.preventDefault();
  var token = jwt.sign(formData,secretKey,{
    expiresIn: "1h" ,  // expires in 1 hour
    issuer:'TrialRequest'
  });
 const res=await postData(`https://u656cu4cq8.execute-api.eu-west-2.amazonaws.com/stage/isthisworking?token=${token}`);
    if(res.status===0){
    router.push('/freeTrial/thanks')
    }

}
  return (
    <>
      <Grid flexGrow={2} sx={{backgroundColor:'white',
      boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
      , }} >
        <HeaderBar/>
     <TrialHeroCard/>
     <Grid container  spacing={2} sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}} >
        <Grid item xs={6}>
            <Box>
            <FreeTrialContentText />
            </Box> 
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
           sx={{backgroundColor:'white',width:'60% !important',}}
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
        <Typography variant="body1" sx={{fontSize:'14px',width:'60%',p:1}}>Note: your temporary license will be sent to this
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
         <Box sx={{ mt:1 ,ml:1,mb:2}}>
        <FormControl style={{backgroundColor:'white',color:'black',width:290,}}>
        <InputLabel id="country-select-label" >Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={formData.Country}
          label="Country"
          name='Country'
          onChange={handleInput}
        >
        {options.map((item)=>(
          <MenuItem key={item.label} value={item.label}>{item.label}</MenuItem>
        ))}
        </Select>
      </FormControl>
      </Box>
        <Button type='submit' onClick={submitForm} sx={{border:'2px solid #9bcc4c',color:'black',fontWeight:'500',width:'100px',mt:6,ml:1}}>Submit</Button>
        </Grid>
      </Box>
      </Grid>
        </Grid>
        </Grid>
      {/* <Grid container  spacing={2} sx={{width:'70%',display:'flex',flexDirection:'row',mx:'auto'}}>
     <Box sx={{width:'50%'}}>
      <FreeTrialContentText />
     </Box>
     <Box    
     component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor:'#e6e6e6',width:'50%',
    
      }}
      autoComplete="off">
        <div style={{display:'flex',flexDirection:'column',padding:'20px',marginTop:'20px'}}>
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
        <p style={{fontSize:'14px'}}>Note: your temporary license will be sent to this
        email address.</p>
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
        <Button type='submit' onClick={submitForm} sx={{border:'2px solid #9bcc4c',color:'black',fontWeight:'500',width:'100px'}}>Submit</Button>
        </div>
      </Box>
        </Grid> */}
 
      
      </>
      
  )
}

export default FreeTrial;