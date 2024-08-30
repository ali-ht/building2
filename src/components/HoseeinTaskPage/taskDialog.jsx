
import * as React from 'react';
import { Dialog } from '@mui/material';
export default function TaskDialog({open,handleClose,component}) {
  return (
    <div>
      <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
          >
            {component}
          </Dialog>
    </div>
  );
}