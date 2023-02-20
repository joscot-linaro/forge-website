import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FreeTrialContentText = () => {
  return (
    <Grid  sx={{border:'1px solid red',display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:8,width:{xs:'700px',md:'75%'},mt:1,p:2,}}>
         <Typography variant="h5" sx={{mt:2,fontWeight:'700'}}>Get your free Linaro tools for Linux trial</Typography>
         <Typography variant="caption"  sx={{mt:4,fontWeight:'600'}}>Free 7 Day Trial of Market Leading Linux Software Tools in
            Linaro Forge</Typography>
            <Typography variant="body1"  sx={{mt:2,fontSize:'14px'}}>Linaro Forge is used by 70% of the top 20 supercomputer
                users worldwide to quickly understand application
                performance and achieve faster results from their debug,
                profiling and optimization efforts.</Typography>
                <Typography variant="body1"  sx={{mt:2,fontSize:'14px'}}>Linaro Forge also provides performance engineering for any
                server, with a combined parallel debugger (Linaro DDT), profiler
                (Linaro MAP) and reporting tool (Performance Reports) for
                developing and optimizing code. Analyze I/O, CPU, Lustre,
                energy and use regional profiling with Caliper. Sign up today
                and receive afree 7-days license and support from Linaro
                experts.</Typography>
                <Typography variant="body1"  sx={{mt:2,borderTop:'1px solid #e6e6e6',fontSize:'14px',paddingTop:'8px'}}>
                The software developers in our group use Linaro Forge on an
                almost daily basis, not only for finding and fixing errors but also in
                order to get a more profound insight into program execution and
                data states.</Typography>
                <Typography variant="body1"  sx={{mt:2,fontWeight:500,fontSize:'14px'}}>Dr. Aurel Neic, Postdoctoral Researcher, Institute of Biophysics
                Medical University of Graz</Typography>
        </Grid>
  )
}

export default FreeTrialContentText;