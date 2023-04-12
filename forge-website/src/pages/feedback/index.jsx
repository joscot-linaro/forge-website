import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button
} from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import HeroCardName from "../../components/HeroCard/HeroCardName";
import { data, MAPProfiling, DDTDebugging } from './formData';
import LoadingBar from '../../components/LoadingBar/index';
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";


const Feedback = () => {
  const router = useRouter();
  const secretKey = process.env.NEXT_PUBLIC_JWT_KEY;
  const feed_url = `${process.env.NEXT_PUBLIC_ENDPOINT}/feedback`;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedNames, setSelectedNames] = useState(data);
  const [isShowProfiling, setIsShowProfiling] = useState(false);
  const [isShowDebugging, setIsShowDebugging] = useState(false);
  const [otherTextFieldValue, setOtherTextFieldValue] = useState('');
  const [otherTextFieldDebuggingValue, setOtherTextFieldDebuggingValue] = useState('');


  const handleFirstTextFieldChange = (event) => {
    const { value } = event.target;
    setSelectedNames((prev) => ({ ...prev, Main_use_cases: value }));
  };

  const handleSecondTextFieldChange = (event) => {
    const { value } = event.target;
    setSelectedNames((prev) => ({ ...prev, Further_feedback: value }));
  };

  const handleCheckboxChange = (event) => {
    const { checked, name, value } = event.target;

    if (name === "Other-Profiling") {
      if (checked) {
        setIsShowProfiling(true);
        setOtherTextFieldValue(value);
      } else {
        setOtherTextFieldValue('');
        setSelectedNames((prevState) => ({
          ...prevState,
          MAP_Profiling_features: {
            ...prevState.MAP_Profiling_features,
            Other: ''
          }
        }));
        setIsShowProfiling(false);
      }
    } else {
      setSelectedNames((prevState) => ({
        ...prevState,
        MAP_Profiling_features: {
          ...prevState.MAP_Profiling_features,
          [name]: checked
        }
      }));
    }

    if (name === "Other-Debugging") {
      if (checked) {
        setIsShowDebugging(true);
        setOtherTextFieldDebuggingValue(value);
      } else {
        setOtherTextFieldDebuggingValue('');
        setSelectedNames((prevState) => ({
          ...prevState,
          DDT_Debugging_features: {
            ...prevState.DDT_Debugging_features,
            Other: ''
          }
        }));
        setIsShowDebugging(false);
      }
    } else {
      setSelectedNames((prevState) => ({
        ...prevState,
        DDT_Debugging_features: {
          ...prevState.DDT_Debugging_features,
          [name]: checked
        }
      }));
    }
  };
  const handleOtherTextFieldChange = (event) => {
    const { value } = event.target;
    setSelectedNames((prevState) => ({
      ...prevState,
      MAP_Profiling_features: {
        ...prevState.MAP_Profiling_features,
        Other: value
      }
    }));
  };

  const handleOtherTextFieldDebuggingChange = (event) => {
    const { value } = event.target;
    setSelectedNames((prevState) => ({
      ...prevState,
      DDT_Debugging_features: {
        ...prevState.DDT_Debugging_features,
        Other: value
      }
    }));
  };
  const postData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',

      },

      );
      const res = response;
      setIsLoading(false);
      if (res) {
        router.push('/feedback/thanks')
      }
      else {
        setIsError(true);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const token = jwt.sign(selectedNames, secretKey, {
      expiresIn: "1h",
      issuer: 'feedback'
    });
    postData(`${feed_url}?token=${token}`);
  }

  return (
    <Grid container sx={{ width: '100%' }}>
      <HeroCardName title_1={'Thank you for using Linaro Forge'} title_2={`We'd like to better understand how you use Linaro Forge`} title_3={'All responses will be anonymous. Please do not add any personal information.'} />
      {isError &&
        <Stack sx={{ width: '100%', }} spacing={3} id='error_message'>
          <Alert severity="error" style={{ display: 'flex', mx: 'auto', justifyContent: 'center', flexDirection: 'row' }}>
            <AlertTitle style={{}}>Error</AlertTitle>
            Something went wrong — <strong>Please try again later!</strong>
          </Alert>

        </Stack>}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {isLoading && (
          <LoadingBar />
        )}
        <Box component="form" autoComplete="off" sx={{ mt: 4, mb: 4 }}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            <p>1: What MAP Profiling features do you use? </p>
            <FormGroup>
              {MAPProfiling.map((name) => (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      checked={selectedNames.MAP_Profiling_features[name]}
                      onChange={handleCheckboxChange}
                      name={name}
                      value={name}
                    />
                  }
                  label={name}
                />
              ))}
              <FormControlLabel
                control={<Checkbox name="Other-Profiling" checked={isShowProfiling} onChange={handleCheckboxChange} />}
                label={<Box>
                  <TextField
                    disabled={!isShowProfiling}
                    value={isShowProfiling ? otherTextFieldValue : ""}

                    onChange={handleOtherTextFieldChange}
                    placeholder='Other'
                    inputProps={{ autoComplete: "off", value: selectedNames.MAP_Profiling_features.Other }}
                  />
                </Box>}
              />
            </FormGroup>
            <p>2: What DDT Debugging features do you use?  </p>
            <FormGroup>
              {DDTDebugging.map((name) => (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      checked={selectedNames.DDT_Debugging_features[name]}
                      onChange={handleCheckboxChange}
                      name={name}
                      value={name}
                    />
                  }
                  label={name}
                />
              ))}
              <FormControlLabel
                control={<Checkbox name="Other-Debugging" checked={isShowDebugging} onChange={handleCheckboxChange} />}
                label={<Box>
                  <TextField
                    disabled={!isShowDebugging}
                    value={isShowDebugging ? otherTextFieldDebuggingValue : ""}
                    onChange={handleOtherTextFieldDebuggingChange}
                    placeholder='Other'
                    inputProps={{ autoComplete: "off", value: selectedNames.DDT_Debugging_features.Other }}
                  />
                </Box>}
              />
            </FormGroup>
            <p>3: What are your main use cases when using Linaro Forge?</p>
            <TextField
              id="multiline-staticUseCase"
              name='mainUseCase'
              rows={4}
              defaultValue=""
              onChange={handleFirstTextFieldChange}
            />
            <p>4: Do you have any further feedback that you would like to give to the Linaro Forge team?</p>
            <TextField
              id="multiline-feedback"
              rows={4}
              defaultValue=""
              name='furtherFeedback'
              onChange={handleSecondTextFieldChange}
            />
            <Button onClick={onSubmitForm} sx={{ border: '2px solid #9bcc4c', color: 'black', fontWeight: '500', width: '100px', mt: 3 }}>Submit</Button>
          </Grid>

        </Box>
      </Grid >
    </Grid >
  );
};

export default Feedback;
