import React, { useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableRow, Paper,
    Typography, IconButton
} from "@mui/material";
import LayersIcon from '@mui/icons-material/Layers';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SmaTaskTable = () => {
    const [expandedRows, setExpandedRows] = useState({});

    const rows = [
        { label: 'طبقه', value: '۷', icon: <LayersIcon color="secondary" /> },
        { label: 'پروژه', value: 'بعثت تا ظهور / اسب‌سوار', icon: <WorkOutlineIcon color="secondary" /> },
        { label: 'تعریف کننده', value: 'دکتر', icon: <PersonIcon color="secondary" /> },
        { label: 'توضیحات', value: 'لورم ایپسوم متمتن ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهومن ساختگی با تولید سادگی نامفهوم از ...', icon: <DescriptionIcon color="secondary" /> },
        { label: 'پیش نیاز', value: 'لورم ایپسوم متن ساختگ ساختگی با تولید سادگی نامفهومن ساختگی با تولید ساختگی با تولید سادگی نامفهومن ساختگی با تولید ساختگی با تولید سادگی نامفهومن ساختگی با تولید ساختگی با تولید سادگی نامفهومن ساختگی با تولیدی با تولید سادگی نامفهوم از ...', icon: <NoteAddIcon color="secondary" /> },
        { label: 'پیوست', value: 'productspec.word', icon: <AttachFileIcon color="secondary" /> },
    ];

    const toggleExpandRow = (index) => {
        setExpandedRows((prevExpandedRows) => ({
            ...prevExpandedRows,
            [index]: !prevExpandedRows[index],
        }));
    };

    const truncateText = (text, isExpanded) => {
        const maxLength = 20; // تعداد کاراکترهای قابل نمایش در حالت غیراسپند
        if (isExpanded || text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}...`;
    };

    return (
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => {
                        const isExpanded = expandedRows[index];
                        const isExpandableRow = row.label === 'توضیحات' || row.label === 'پیش نیاز';

                        return (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "#fff" : "#f0f0f0",
                                    height: isExpanded ? "auto" : "2rem",
                                }}
                            >
                                <TableCell align="center" style={{ borderBottom: "none", padding: "6px" }}>
                                    {row.icon}
                                </TableCell>
                                <TableCell align="right" style={{ borderBottom: "none", padding: "6px" }}>
                                    <Typography>{row.label}</Typography>
                                </TableCell>
                                <TableCell align="right" style={{ borderBottom: "none", padding: "6px", position: "relative" }}>
                                    <Typography
                                        style={{
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {truncateText(row.value, isExpanded)}
                                    </Typography>
                                    {isExpandableRow && (
                                        <IconButton
                                            onClick={() => toggleExpandRow(index)}
                                            size="small"
                                            style={{
                                                position: "absolute",
                                                right: 0,
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                            }}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    )}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SmaTaskTable;
