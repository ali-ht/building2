
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const person=[
    {
        name:"علی تفکری",
        src:""
    },
    {
        name:"مهدی فیاض",
        src:''
    },
    {
        name:"علی حقی",
        src:""
    }
]
export default function PersonChip() {
  return (
    <div>
        <Stack direction="row" dir="rtl" sx={{padding:"34px"}}>
            {person.map((per) => (
                <Chip size='big' sx={{paddingRight:1.5,borderRadius:0.5,color:"textColor.main",margin:'2px'}} dir="rtl"
                 avatar={<Avatar src={per.src ? require(per.src) : ""}>{per.src ? '' : per.name[0]}</Avatar>}
                 label={per.name}/>
            ))}
        </Stack>
    </div>
  );
}