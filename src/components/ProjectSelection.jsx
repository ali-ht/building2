import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BuildingTreeView from './TreeView/BuildingTreeView';
import DialogButton from './DialogButton'
import { Typography } from '@mui/material';


const ProjectSelection = () => {

  return (
    <Box
      sx={{
        display: 'grid',
        textAlign: 'center',
        flexWrap: 'wrap',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: 5, padding: '20px 30px'  , width:'380px' , height:'420px' , flex:'1' , overflowY:'auto'}}>
        <Typography>انتخاب پروژه</Typography>
        <div style={{height:'calc(100% - 60px)'}}>
        <BuildingTreeView />
        <div style={{position:'sticky' , bottom:'0px'}}>
        <DialogButton title='انتخاب' bottomm='0px'/>
        </div>
        </div>
      </Paper>
    </Box>
  )
}

export default ProjectSelection;
