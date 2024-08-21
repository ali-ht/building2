import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
export default function ButtonOutline() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" sx={{color:"customOrange.main",borderColor:"customOrange.main",borderRadius:"12px"}} startIcon={<DeleteRoundedIcon />}>
        حذف
      </Button>
      <Button variant="outlined" sx={{bgcolor:"customGray.light",color:"customGray.dark",borderColor:"customGray.dark",borderRadius:"12px"}} startIcon={<EditRoundedIcon />}>
        ویرایش
      </Button>
    </Stack>
  );
}