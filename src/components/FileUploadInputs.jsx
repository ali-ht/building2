import * as React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function FileUploadInputs({ title }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        width: "300px",
        position: "relative",
        marginTop: "5px",
      }}
    >
      <Button
        component="label"
        sx={{
          fontFamily: "IRANYekanWeb",
          backgroundColor: "#F5F5F5",
          padding: "10px 20px",
          borderRadius: "40px",
          cursor: "pointer",
          color: "#9E9E9E",
        }}
      >
        {title}
        {<FileUploadOutlinedIcon sx={{}} />}
        <input type="file" onChange={handleFileChange} hidden />
      </Button>
    </Box>
  );
}
// marginRight: "130px"
// position: "absolute",
