import React from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableRow, Paper,
    Typography
} from "@mui/material";
import LayersIcon from '@mui/icons-material/Layers';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const SmaTaskTable = () => {
    const rows = [
        { label: 'طبقه', value: '۷', icon: <LayersIcon color="secondary" /> },
        { label: 'پروژه', value: 'بعثت تا ظهور / اسب‌سوار', icon: <WorkOutlineIcon color="secondary" /> },
        { label: 'تعریف کننده', value: 'دکتر', icon: <PersonIcon color="secondary" /> },
        { label: 'توضیحات', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <DescriptionIcon color="secondary" /> },
        { label: 'پیش نیاز', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <NoteAddIcon color="secondary" /> },
        { label: 'پیوست', value: 'productspec.word', icon: <AttachFileIcon color="secondary" /> },
    ];

    return (
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#fff" : "#f0f0f0"
                            }}
                        >
                            <TableCell align="center" style={{ borderBottom: "none" }}>
                                {row.icon}
                            </TableCell>
                            <TableCell align="right" style={{ borderBottom: "none" }}>
                                <Typography>{row.label}</Typography>
                            </TableCell>
                            <TableCell align="right" style={{ borderBottom: "none" }}>
                                <Typography>{row.value}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SmaTaskTable;
