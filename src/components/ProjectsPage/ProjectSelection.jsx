import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BuildingTreeView from '../TreeView/BuildingTreeView.jsx';
import DialogButton from '../Objects/DialogButton.jsx'
import { Typography } from '@mui/material';


const ProjectSelection = ({ selectedProject }) => {

  const setProject = (project) => {
    selectedProject = project
  }

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
      <Paper
        elevation={3}
        sx={{
          borderRadius: 5,
          padding: '20px 30px',
          width: '380px',
          height: '420px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Typography sx={{ margin: '30px 0px 25px 0px', fontFamily: 'IRANYekanWeb', fontSize: 29, color: 'black' }}>
          انتخاب پروژه</Typography>
        <div style={{
          flex: 1,
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <BuildingTreeView selectedProject={setProject} />
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </div>
        <div style={{ marginTop: 'auto', marginBottom: '30px' }}>
          <DialogButton title='انتخاب' />
        </div>
      </Paper>
    </Box>
  )
}

export default ProjectSelection;
