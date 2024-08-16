import { useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Typography, Box } from '@mui/material';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
            <Paper sx={{
                width: isOpen ? '280px' : '70px',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '13px 33px',
                boxSizing: 'border-box',
                overflowY: isOpen ? 'auto':'hidden',
                overflowX:'hidden',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: isOpen ? 'space-between' : 'center',
                }}>
                    {isOpen && <Typography sx={{fontFamily:'IRANYekanWeb' , fontSize:'20px'}}>نوار کاربری</Typography>}
                    <IconButton onClick={toggleSidebar} sx={{ color: '#463F3F'}}>
                        {isOpen ? <CloseRoundedIcon sx={{width:'32px' , height:'32px'}} /> : <MenuIcon sx={{width:'32px' , height:'32px'}} />}
                    </IconButton>
                </Box>

                
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width:'100%',
                    justifyContent: isOpen ? 'right' : 'center',
                    textAlign:'center',
                    backgroundColor: isOpen ? 'rgba(241, 95, 43, 0.1)' : 'white',
                    borderRadius: isOpen ? '45px' : '50%',
                }}>
                    <IconButton sx={{ color: '#F15F2B'}}>
                        {isOpen ? <Person2OutlinedIcon sx={{width:'32px' , height:'32px'}} /> : <Person2RoundedIcon  sx={{width:'32px' , height:'32px'}} />}
                    </IconButton>
                    {isOpen && <Typography sx={{fontFamily:'IRANYekanWeb' , fontSize:'14px'}}>کار های شما</Typography>}
                </Box>

                {/* <Box
                sx={{marginLeft:'-30px',marginTop:'10px'}}
                >
                    {isOpen && <Box><Typography>tree</Typography></Box>}
                </Box>  */}
            </Paper>
    );
};

export default Sidebar;