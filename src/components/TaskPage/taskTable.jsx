import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { Collapse, Box } from "@mui/material";
function createData(index,icon, name, value) {
  return {index, icon, name, value };
}
const rows = [
  createData(1,<ApartmentRoundedIcon sx={{ color: "#F15F2B" }} />, "طبقه", 159),
  createData(2,
    <TextSnippetOutlinedIcon sx={{ color: "#F15F2B" }} />,
    "پروژه",
    23
  ),
  createData(3,
    <PersonOutlineIcon sx={{ color: "#F15F2B" }} />,
    "تعریف کننده",
    262
  ),
  createData(4,<SubjectRoundedIcon sx={{ color: "#F15F2B" }} />, "توضیحات", 159),
  createData(5,
    <PlaylistAddCheckRoundedIcon sx={{ color: "#F15F2B" }} />,
    "پیش نیاز",
    237
  ),
  createData(6,<AttachmentRoundedIcon sx={{ color: "#F15F2B" }} />, "پیوست", 262),
];
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
      sx={{bgcolor:row.index%2==0 ? "customGray.light" : "#ffff"}}
        key={row.name}
      >
        <TableCell
          sx={{ minWidth: 2 }}
          align="right"
          component="th"
          scope="row"
        >
          {row.icon}{row.name}
        </TableCell>
        <TableCell align="right">{row.value}</TableCell>
        <TableCell >
        {(() => {
        switch (row.name) {
          case "توضیحات":   
          return (
            
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            );
          case "پیش نیاز": 
          return (
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
          );
        }
      })()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function TaskTable() {
  const [open, setOpen] = React.useState(false);
  return (
    <TableContainer sx={{borderStyle:"solid",borderRadius:"12px",borderColor:"customGray.dark"}}>
      <Table stickyHeader="false"  dir="rtl">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}