import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const backColor = "#F5F5F5";

export default function TextFieldsLarge(props) {
  return (
    <Box
      sx={{
        '& > :not(style)': { 
            m: 1,
            marginBottom: props.margin,
            minHeight: '120px',
            width: '300px', 
            height: '100%', 
            direction: 'rtl', 
            backgroundColor: backColor,
            borderRadius: '30px',
        },
      }}
    >
      <TextField label = {props.title} multiline sx={{direction: 'rtl', borderRadius: '40px'}}/>
    </Box>
  );
}
