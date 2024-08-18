import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF4500",
  color: "white",
  width: "88%",
  height: "40px",
  borderRadius: "8px",
  fontFamily: "IRANYekanWeb",
  ":hover": {
    backgroundColor: "#FF8C00"
  }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#7f2200",
  borderRadius: '12px 0px 0px 12px',
  height: '52px',
  position: 'absolute',
  marginRight: '67px',
  ":hover": {
    backgroundColor: "#e60101"
  }
}));

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  position: 'flex',
  textAlign: 'right',
  width: '80%',
  marginLeft: '22px',
  marginBottom: '50px',
  '& .MuiSvgIcon-root': {
    position: 'relative',
    fontSize: '35px',
  },
  '& .MuiPaper-root': {
    backgroundColor: '#e60101',
    position: 'relative',
    borderRadius: '12px',
    fontFamily: 'IRANYekanWeb',
    height: '40px',
  },
}));

export default function CustomSnackbar({ title, message, errorMessage, onClickPath }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  var err = errorMessage;

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (err) {
      setOpen(true);
    } else {
      navigate(onClickPath);
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
      <StyledIconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </StyledIconButton>
    </React.Fragment>
  );

  return (
    <div>
      <StyledButton onClick={handleClick} disabled={isLoading}>{title}</StyledButton>
      <StyledSnackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}
