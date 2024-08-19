import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const backColor = "#F5F5F5";

export default function TextFieldsLarge(props) {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          marginBottom: props.marginB,
          width: "300px",
          height: "100px",
          direction: "rtl",
          backgroundColor: backColor,
          borderRadius: "30px",
        },
      }}
    >
      <TextField
        label={props.title}
        multiline
        rows={3}
        sx={{ direction: "rtl", borderRadius: "40px" }}
      />
    </Box>
  );
}
