import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DialogButton from './DialogButton'


export default function Task({task , onDelete}) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
    <Avatar sx={{ bgcolor: '#F3F3F3' , height:'51px' , width:'51px'}} onClick={() => {setOpen(true);}}> </Avatar>
      <Dialog
        sx={{
            backgroundColor: 'transparent',
            '& .MuiPaper-elevation':
            {
            borderRadius:'12px',
            backgroundColor:'#FFFFFF',
            width:'300px',
            height:'300px',
            padding:'8px',
            position:'relative',
            },
        }}
        onClose={() => {setOpen(false);}}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div style={{padding:'14px' , display:'grid' , gap:'13px' , height:'100%'}}>
          <div style={{display: "flex" , alignItems:'center' , justifyContent:'space-between'}}>
              <CloseRoundedIcon onClick={() => {setOpen(false);}} sx={{fontSize:'29px'}}/>
              <div style={{display:'flex' , columnGap:'10px',alignItems:'center'}}>
              <ModeEditIcon sx={{color:'#F15F2B'}}/>
              <DeleteIcon sx={{color:'#F15F2B'}} onClick={() => onDelete(task.id)}/>
              </div>
          </div>

          <Typography sx={{textAlign:'center' , fontFamily:'IRANYekanWeb' , fontSize:'20px'}}>
              {task.title}
          </Typography>
          <Typography sx={{fontFamily:'IRANYekanWeb'}}>
              {task.description}
          </Typography>
          <DialogButton title='مشاهده کامل کار'/>
        </div>
      </Dialog>
    </React.Fragment>
  );

}

