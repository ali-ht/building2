import TextFields from "../Objects/TextFields.jsx";
import SelectInputs from "../Objects/SelectInputs.jsx";
import TextFieldsLarge from "../Objects/TextFieldsLarge.jsx";
import EndButtons from "../Objects/EndButtons.jsx";
import FileUploadInputs from "../Objects/FileUploadInputs.jsx";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const floors = [
  "طبقه اول",
  "طبقه دوم",
  "طبقه سوم",
  "طبقه چهارم",
  "طبقه پنجم",
  "طبقه ششم",
  "طبقه هفتم",
];

const projects = ["ساختمان", "وپ عبادالله", "معارف"];

export default function TaskCreationPage() {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        flexWrap: "wrap",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& > :not(style)": {
          m: 0,
          width: 380,
          height: "100%",
        },
        "& .MuiFormLabel-root": {
          fontFamily: "IRANYekanWeb",
        },
        "& fieldset": { border: "none" },
        "& label": {
          width: "100%",
          textAlign: "right",
          transformOrigin: "center",
        },
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: 5 }}>
        <Typography
          sx={{
            margin: "7px 0px 0px 0px",
            fontFamily: "IRANYekanWeb",
            fontSize: 25,
            color: "black",
          }}
        >
          ایجاد کار جدید
        </Typography>
        <TextFields title="عنوان کار" margin="-2px" />
        <SelectInputs title="انتخاب پروژه" menuitems={projects} />
        <SelectInputs title="انتخاب طبقه" menuitems={floors} />
        <TextFieldsLarge title="شرح مختصر کار" marginB = "-2px"/>
        <TextFieldsLarge title="شرح پیش نیاز" marginB = "0px"/>
        <FileUploadInputs title="تصویر شاخص کار" />
        <FileUploadInputs title="فایل پیوست" />
        <EndButtons title="ایجاد" marginL="5px" />
        <EndButtons
          title="انصراف"
          bgColor="#F3F3F3"
          bgColorHover="#F5FFFA"
          colorText="#9E9E9E"
        />
      </Paper>
    </Box>
  );
}
