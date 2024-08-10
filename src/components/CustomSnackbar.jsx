import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF4500",
  color: "white",
  width: "88%",
  height: "40px",
  borderRadius: "8px",
  fontFamily: "font1",
  ":hover": {
    backgroundColor: "#FF8C00"
  }
}));

export default function CustomSnackbar() {
  const [open, setOpen] = React.useState(false);

  var err = true;

  const handleClick = () => {
    if (err) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        sx = {{
          backgroundColor: "#7f2200", 
          borderRadius: '12px 0px 0px 12px', 
          height: '52px',
          position: 'absolute',
          marginRight: '67px',
          ":hover": {
          backgroundColor: "#e60101"
          }
        }}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <StyledButton onClick = {handleClick}>وارد شوید</StyledButton>
      <Snackbar
        // anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message="نام کاربری و یا رمز عبور اشتباه است"
        action={action}
        sx={{
          position: "absolute",
          textAlign: 'right',
          '& .css-ptiqhd-MuiSvgIcon-root': {
            position: 'relative',
            top: '0px',
            fontSize: '35px', 
          },
          '& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root': {
            backgroundColor: '#e60101',
            position: 'relative',
            borderRadius: '12px',
            fontFamily: 'font1',
            height: '40px',
          },
        }}
      />
    </div>
  );
}
