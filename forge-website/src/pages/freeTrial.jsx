import React,{useState} from 'react';
import Navbar from '../components/Navbar/index';
import TrialHeroCard from '../components/HeroCard/TrialHeroCard/index';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import FreeTrialContentText from '../components/FreeTrialContentText/index';
import jwt from 'jsonwebtoken';
import bearer  from 'bearer';


const freeTrial = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [formSuccess, setFormSuccess] = useState(false);
  const [test,setTest]=useState(false);
  const[secretKey,setSecretKey]=useState('snorkel4-lair0-nicotine-Barrette-Foothill3-1Amulet-3pigeon-upstart');
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Country:"",
    Job_title:"",
    Company:"",
    Email:"",
    Tel_Number:"",
    // Linaro_Forge:false,
    // Linaro_Compiler:false,
    // Linaro_Performance:false
  });
  // const handleCheckboxInput=(e)=>{
  //   const fieldName = e.target.name;
  //   const fieldValue = e.target.checked;
  
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: fieldValue
  //   }));
  // }

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
        // body: data
        // body: JSON.stringify(data)
    });
    const jwtData = await response.body;
    console.log('response is', response);
    return jwtData;
    }catch(err){
      console.log(err);
    }

 }

const submitForm=(e)=> {
  e.preventDefault();
  var token = jwt.sign(formData,secretKey,{
    expiresIn: "1h" ,  // expires in 1 hour
    issuer:'TrialRequest'
  });

   console.log('token is :',token);
  // console.log('json data',JSON.stringify(formData));
  postData(`https://u656cu4cq8.execute-api.eu-west-2.amazonaws.com/stage/isthisworking?token=${token}`)
  .then(res=>
 console.log(res)
  )

}
  return (
    <>
      <Navbar/>
      <TrialHeroCard/>
      <Grid container  spacing={2} sx={{width:'70%',display:'flex',flexDirection:'row',mx:'auto'}}>
     <Box sx={{width:'50%'}}>
      <FreeTrialContentText />
     </Box>
     <Box    
     component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor:'#e6e6e6',width:'50%',
    
      }}
      noValidate
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
        
        {/* <div style={{display:'flex',flexDirection:'column'}}>
          <p>Which product(s) are you interested in?</p>
          <FormGroup>
      <FormControlLabel control={<Checkbox name='Linaro_Forge' checked={formData.Linaro_Forge} onChange={handleCheckboxInput} />} label="Linaro Forge (includes Linaro DDT, Linaro MAP
and Linaro Performance Reports)" />
      <FormControlLabel  control={<Checkbox name='Linaro_Compiler' checked={formData.Linaro_Compiler} onChange={handleCheckboxInput} />} label="Linaro Compiler for Linux" />
      <FormControlLabel   control={<Checkbox name='Linaro_Performance' checked={formData.Linaro_Performance} onChange={handleCheckboxInput}  />} label="Linaro Performance Libraries" />
    </FormGroup>
    <p>Linaro will process your information in accordance
with our Privacy Policy.</p>

        </div> */}
      </Box>
        </Grid>
 
      
      </>
      
  )
}

export default freeTrial;