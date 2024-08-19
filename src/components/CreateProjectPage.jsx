import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import TextFields from './TextFields';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const OvalButton = styled(Button)(({ theme }) => ({
  borderColor: "#FF7043",
  color: "#FF7043",
  margin: '20px 0',
  borderRadius: '50px',
  width: '90%',
  padding: '10px 0',
  fontFamily: 'IRANYekanWeb',
  fontSize: '16px',
  textTransform: 'none',
  '&:hover': {
    borderColor: '#FF7043',
    backgroundColor: '#F5F5F5'
  }
}));

const RectButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  width: '45%',
  padding: '10px 0',
  fontFamily: 'IRANYekanWeb',
  fontSize: '16px',
  textTransform: 'none',
}));

const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 25,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#FF7043',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#FF7043',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#9e9e9e',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CreateProjectPage = () => {
  const [isSubProject, setIsSubProject] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState('بعثت تا ظهور > موسیقی');

  const handleSwitchChange = (event) => {
    setIsSubProject(event.target.checked);
  };

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
        '& .MuiFormLabel-root': {
          fontFamily: 'IRANYekanWeb',
        },
        '& fieldset': { border: 'none' },
        "& label": {
          width: "100%",
          textAlign: "right",
          transformOrigin: "center",
          fontFamily: 'IRANYekanWeb',
          fontSize: '16px',
          color: '#424242',
        },
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: 5, padding: '20px 30px' }}>
        <Typography sx={{ margin: '30px 0px 25px 0px', fontFamily: 'IRANYekanWeb', fontSize: 29, color: 'black' }}>
          ایجاد پروژه‌ی جدید
        </Typography>
        <TextFields title="عنوان پروژه" margin="20px" width="90%" />
        <FormGroup sx={{}}>
          <FormControlLabel
            control={<StyledSwitch checked={isSubProject} onChange={handleSwitchChange} />}
            label={
              <Typography sx={{ fontFamily: 'IRANYekanWeb', fontSize: 14, textAlign: 'right', width:'200px' }}>
                آیا این پروژه زیر مجموعه‌ی پروژه‌ی دیگری هست؟
              </Typography>
            }
            sx={{
              marginRight:'0',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              width: '90%',
              gap: '85px',
              flexDirection: 'row-reverse',
            }}
          />
        </FormGroup>
        {
        // isSubProject && 
        (
          <>
            <OvalButton variant="outlined" onClick={() => {}}>
              تغییر پروژه
            </OvalButton>
            <Typography sx={{ fontFamily: 'IRANYekanWeb', fontSize: 14, color: '#9E9E9E', margin: '0px 0' }}>
              پروژه انتخاب شده: {selectedProject}
            </Typography>
          </>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <RectButton variant="contained" sx={{
            backgroundColor: '#FF7043',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FF5722',
            },
          }}>
            ایجاد
          </RectButton>
          <RectButton sx={{
            backgroundColor: '#F3F3F3',
            color: '#9E9E9E',
            '&:hover': {
              backgroundColor: '#F5FFFA',
            },
          }}>
            انصراف
          </RectButton>
        </Box>

      </Paper>
    </Box>
  )
}

export default CreateProjectPage;
