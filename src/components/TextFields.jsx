import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const backColor = "#F5F5F5";

export default function TextFields(props) {
  const width = props.width || "300px";
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          marginBottom: props.margin,
          width: width,
          height: "50px",
          direction: "rtl",
          backgroundColor: backColor,
          borderRadius: "40px",
        },
      }}
    >
      <TextField
        label={props.title}
        sx={{ direction: "rtl", borderRadius: "40px" ,
          "& .MuiFormLabel-root":{
            color:'#9E9E9E'
          }}}
      />
    </Box>
  );
}
