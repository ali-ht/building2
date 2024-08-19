import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(() => ({
  width: "100%",
  height: "53px",
  margin: "10px 0px 15px 0px",
  borderRadius: "8px",
  fontFamily: "IRANYekanWeb",
}));

export default function DialogButton({ title, bgColor= "#FF4500", marginL="0px", bgColorHover= "#FF8C00", colorText=  "white"}) {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  };
  
  return (
    <StyledButton disabled={isLoading} onClick={handleClick} variant="text" sx={{
      fontSize:'18px',
      bottom:'-23px',
      backgroundColor: bgColor,
      marginLeft: marginL,
      color: colorText,
      ":hover": {
        backgroundColor: bgColorHover
      }
      }}
    >
      {title}
    </StyledButton>
  );
}