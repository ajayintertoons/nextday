import { Box, Button, Paper, Step, StepConnector, stepConnectorClasses, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react';
import { styled } from "@mui/material/styles";
import { CustomStepIcon } from '../stepper/CustomStepIcon';



const TrackingCard3 = ({ steps }) => {
  const dateTimeformater = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
  
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
    };
  
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
    return `${formattedDate} | ${formattedTime}`;
  };
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.vertical}`]: {
      marginLeft: 13, // tune this based on your CustomStepIcon size
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderLeftWidth: 2,
      borderLeftColor: '#eaeaf0',
      minHeight: 30, // increase to avoid "breaking"
      borderRadius: 1,
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
      borderLeftColor: '#1BA169',
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
      borderLeftColor: '#1BA169',
    },
  }));
  
  return (
    <Box sx={{ maxWidth: 400 }} >
      <Stepper connector={<QontoConnector />} activeStep={steps?.length} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <Typography variant="body2">{step.status}</Typography>
              <Typography variant="caption">{dateTimeformater(step.updatedAt)}</Typography>
            </StepLabel>
            <StepContent />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default TrackingCard3