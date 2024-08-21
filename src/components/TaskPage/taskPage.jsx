import React from "react";
import TaskDialog from "./taskDialog";
import TaskTable from "./taskTable";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import PersonChip from "./personIcon";
import ButtonOutline from "./buttonOutline";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputAdornment from "@mui/material/InputAdornment";
export default function TaskPage() {
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState(<></>);
  const handleClickOpen = () => {
    setOpen(true);
    setComponent(
      <>
        <DialogTitle id="alert-dialog-title">افزودن گزارش کار</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={10}
            sx={{ bgcolor: "customGray.light" }}
            dir="rtl"
          />
        </DialogContent>
        <Grid>
          <Button
            variant="contained"
            color="customGray"
            sx={{ color: "customGray.dark" }}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            color="customOrange"
            sx={{ color: "#ffff" }}
          >
            ایجاد
          </Button>
        </Grid>
      </>
    );
  };
  const handleClickOpen2 = () => {
    setOpen(true);
    setComponent(
      <>
        <DialogTitle id="alert-dialog-title">مدیریت اعضا</DialogTitle>
        <DialogContent>
          <TextField
            dir="rtl"
            id="input-with-icon-textfield"
            placeholder="جستجوی نام کاربری"
            sx={{ bgcolor: "customGray.light" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </DialogContent>
        <Grid>
          <Button
            variant="contained"
            color="customOrange"
            sx={{ color: "#ffff" }}
          >
            بستن
          </Button>
        </Grid>
      </>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper sx={{ height: "600px", overflow: "scroll" }}>
      <Grid sx={{ padding: "34px" }}>
        <Skeleton height={"280px"} variant="image" />
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            direction: 'rtl'
          }}>
          <Typography variant="h5" gutterBottom>
            تکسچر کعبه
          </Typography>
          <ButtonOutline />
        </div>

        <TaskTable />
      </Grid>
      <Grid
        dir="rtl"
        container
        justifyContent="space-between"
        sx={{ bgcolor: "customOrange.light" }}
      >
        <Grid item>
          <p>
            <PersonRoundedIcon />
            مسئولین
          </p>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            color="customOrange"
            onClick={handleClickOpen2}
          >
            <EditRoundedIcon />
            ویرایش مسئولین
          </Button>
        </Grid>
      </Grid>
      <PersonChip />
      <Grid
        dir="rtl"
        container
        justifyContent="space-between"
        sx={{ bgcolor: "customOrange.light" }}
      >
        <Grid item>
          <p>
            <DonutLargeRoundedIcon />
            گزارش‌ها
          </p>
        </Grid>
        <Grid item>
          <Button variant="text" color="customOrange" onClick={handleClickOpen}>
            <AddRoundedIcon />
            اضافه کردن گزارش
          </Button>
          <TaskDialog
            open={open}
            handleClose={handleClose}
            component={component}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="customOrange" sx={{ color: "#ffff" }}>
        انجام کار
      </Button>
    </Paper>
  );
}
