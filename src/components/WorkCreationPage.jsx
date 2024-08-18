import * as React from 'react';
import TextFields from './TextFields';
import SelectInputs from './SelectInputs';
import TextFieldsLarge from './TextFieldsLarge';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const floors = [
    'طبقه اول',
    'طبقه دوم',
    'طبقه سوم',
    'طبقه چهارم',
    'طبقه پنجم',
    'طبقه ششم',
    'طبقه هفتم',
];

const projects = [
    'ساختمان',
    'وپ عبادالله',
    'معارف',
];

export default function WorkCreationPage() {
  return (
    <Box
        sx={{
            display: 'flex',
            textAlign: 'center',
            flexWrap: 'wrap',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            '& > :not(style)': {
            m: 0,  
            width: 380,
            height: "100%",
            },
            '& .MuiFormLabel-root':{
                fontFamily:'IRANYekanWeb',
            },
            '& fieldset':{border:'none'},
            "& label": {
                width: "100%",
                textAlign: "right",
                transformOrigin: "center",
            },
        }}
    >
        <Paper elevation={3} sx={{borderRadius: 5}}>
            <Typography sx={{margin:'10px 0px 0px 0px', fontFamily:'IRANYekanWeb' , fontSize:29 , color:'black'}}>
                ایجاد کار جدید
            </Typography>
            <TextFields title = "عنوان کار" margin= '0px'/>
            <SelectInputs title = "انتخاب پروژه" menuitems = {projects}/>
            <SelectInputs title = "انتخاب طبقه" menuitems = {floors}/>
            <TextFieldsLarge title = "شرح مختصر کار"/>
            <TextFieldsLarge title = "شرح پیش نیاز"/>
        </Paper>
    </Box>
  );
}