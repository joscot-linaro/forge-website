import React, { useState, useMemo, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard/index';
import Select from '@mui/material/Select';
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
import Footer from '../../components/Footer/index';
import countryList from 'react-select-country-list';
import LoadingBar from '../../components/LoadingBar/index';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const FreeTrial = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const secretKey = process.env.NEXT_PUBLIC_JWT_KEY;
  const trial_url = process.env.NEXT_PUBLIC_Main_ENDPOINT;
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Country: "",
    Job_title: "",
    Company: "",
    Email: "",
    Tel_Number: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }
  async function postData(url) {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
      });
      const res = response;
      setIsLoading(false);
      if (res) {
        router.push('/freeTrial/thanks')
      }
      else {
        setIsError(true);
      }
      return res;
    } catch (err) {
      console.log(err);
    }

  }

  const submitForm = (e) => {
    e.preventDefault();
    const infoErrors = validate(formData);
    setFormErrors(validate(formData));

    if (Object.keys(infoErrors).length === 0) {
      setIsSubmitting(true);
      const token = jwt.sign(formData, secretKey, {
        expiresIn: "1h",  // expires in 1 hour
        issuer: 'TrialRequest'
      });
      postData(`${trial_url}?token=${token}`);
    }
  }
  const validate = (values) => {
    let errors = {};
    if (!values.Email) {
      errors.email = "Email cannot be blank!";
    }
    if (!values.Name) {
      errors.Name = "Name cannot be blank!";
    } else if (values.Name.length <= 1) {
      errors.Name = "Name must be more than 1 characters!";
    }
    if (!values.LastName) {
      errors.LastName = "LastName cannot be blank!";
    } else if (values.LastName.length <= 2) {
      errors.LastName = "LastName must be more than 2 characters!";
    }
    if (!values.Country) {
      errors.Country = "Country cannot be blank!";
    }
    if (!values.Job_title) {
      errors.Job_title = "Job title cannot be blank!";
    }
    if (!values.Tel_Number) {
      errors.Tel_Number = "Telephone Number cannot be blank!";
    }
    return errors;
  };
  return (
    <ThemeProvider theme={formtheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CssBaseline />
      <Grid flexGrow={2} sx={{
        backgroundColor: 'white',
        boxSizing: 'border-box', m: 0, p: 0, width: { xs: 'min-content', md: '100%', sm: '100%' },
      }} >
        <HeroCard myTitle={'Free Trial'} />
        {isError &&

          <Stack sx={{ width: '100%', mb: '10px' }} spacing={3} id='error_message'>
            <Alert severity="error" style={{ display: 'flex', marginBottom: '6px', mx: 'auto', justifyContent: 'center', flexDirection: 'row' }}>
              <AlertTitle style={{}}>Error</AlertTitle>
              Something went wrong — <strong>Please try again later!</strong>
            </Alert>

          </Stack>}
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: { md: '73.5vh', xs: '50vh', sm: '90vh' } }} >
          <Grid item xs={6}>
            {isLoading && (
              <LoadingBar />
            )}
            <Box>
              <FreeTrialContentText />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ width: '100%', backgroundColor: '#e6e6e6' }}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                ml: { xs: '8%', md: '0' }, height: '100%', pl: '10%',
                display: 'flex', mt: 2,
                width: { xs: '700px', md: '90%' }
              }}
              autoComplete="off">
              <Grid style={{ display: 'flex', flexDirection: 'column', padding: '20px', }}>
                <TextField
                  required
                  id="outlined-name-input"
                  name='Name'
                  placeholder="Name"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', width: '60% !important', }}
                  value={formData.Name}
                  onChange={handleInput}
                />
                {formErrors.Name && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.Name}</Typography>
                )}
                <TextField
                  required
                  id="outlined-LastName-input"
                  name='LastName'
                  placeholder="Last name"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', width: '60% !important' }}
                  onChange={handleInput}
                  value={formData.LastName}
                />
                {formErrors.LastName && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.LastName}</Typography>
                )}
                <TextField
                  required
                  id="outlined-Job-title-input"
                  placeholder="Job title"
                  name='Job_title'
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', width: '60% !important' }}
                  value={formData.Job_title}
                  onChange={handleInput}
                />
                {formErrors.Job_title && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.Job_title}</Typography>
                )}
                <TextField
                  required
                  id="outlined-Company-input"
                  name="Company"
                  placeholder="Company"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', width: '60% !important' }}
                  value={formData.Company}
                  onChange={handleInput}
                />
                {formErrors.Company && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.Company}</Typography>
                )}
                <Typography variant="body1" sx={{ fontSize: '14px', width: '60%', p: 1 }}>Note: your temporary license will be sent to this
                  email address.</Typography>
                <TextField
                  required
                  name='Email'
                  type='email'
                  id="outlined-email-input"
                  placeholder="Corporate email address"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', width: '60% !important' }}
                  value={formData.Email}
                  onChange={handleInput}
                />
                {formErrors.email && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.email}</Typography>
                )}
                <TextField
                  required
                  id="outlined-Telephone-input"
                  type='number'
                  name='Tel_Number'
                  placeholder="Telephone number"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{ backgroundColor: 'white', }}
                  value={formData.Tel_Number}
                  onChange={handleInput}
                />
                {formErrors.Tel_Number && (
                  <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.Tel_Number}</Typography>
                )}
                <Box sx={{ mt: 1, ml: 1, mb: 2 }}>
                  <FormControl style={{ backgroundColor: 'white', color: 'black', width: 290, }}>
                    <InputLabel id="country-select-label" >Country</InputLabel>
                    <Select
                      labelId="country-select-label"
                      id="country-select"
                      value={formData.Country}
                      label="Country"
                      name='Country'
                      onChange={handleInput}
                    >
                      {options.map((item) => (
                        <MenuItem key={item.label} value={item.label}>{item.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {formErrors.Country && (
                    <Typography style={{ color: 'red', paddingLeft: '8px', fontWeight: 'lighter', fontSize: '10px' }}>{formErrors.Country}</Typography>
                  )}
                </Box>
                <Button type='submit' onClick={submitForm} sx={{ border: '2px solid #9bcc4c', color: 'black', fontWeight: '500', width: '100px', mt: 6, ml: 1 }}>Submit</Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>

  )
}

export default FreeTrial;