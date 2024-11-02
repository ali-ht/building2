import React, { useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableRow, Paper,
    Typography, IconButton
} from "@mui/material";
import {
    Layers as LayersIcon,
    WorkOutline as WorkOutlineIcon,
    Person as PersonIcon,
    Description as DescriptionIcon,
    NoteAdd as NoteAddIcon,
    AttachFile as AttachFileIcon,
    ExpandMore as ExpandMoreIcon
} from "@mui/icons-material";

const SmaTaskTable = () => {
    const [expandedRows, setExpandedRows] = useState({});

    // colors
    const primaryColor = "#f0f0f0";
    const secondaryColor = "#fff";
    const iconColor = "#F15F2B";

    // Data rows for the table
    const rows = [
        { label: 'طبقه', value: '۷', icon: <LayersIcon sx={{ color: iconColor }} /> },
        { label: 'پروژه', value: 'بعثت تا ظهور / اسب‌سوار', icon: <WorkOutlineIcon sx={{ color: iconColor }} /> },
        { label: 'تعریف کننده', value: 'دکتر', icon: <PersonIcon sx={{ color: iconColor }} /> },
        { label: 'توضیحات', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <DescriptionIcon sx={{ color: iconColor }} /> },
        { label: 'پیش نیاز', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <NoteAddIcon sx={{ color: iconColor }} /> },
        { label: 'پیوست', value: 'productspec.word', icon: <AttachFileIcon sx={{ color: iconColor }} /> },
    ];


    const handleRowToggle = (index) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const getDisplayText = (text, isExpanded) => {
        const maxLength = 40;
        return isExpanded || text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
    };

    const isRowExpandable = (label) => label === 'توضیحات' || label === 'پیش نیاز';

    return (
        <TableContainer component={Paper} sx={{ boxShadow: "none"}}>
            <Table aria-label="SmaTaskTable">
                <TableBody>
                    {rows.map((row, index) => {
                        const isExpanded = expandedRows[index];
                        const expandable = isRowExpandable(row.label);

                        return (
                            <TableRow
                                key={index}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? secondaryColor : primaryColor,
                                    height: isExpanded ? "auto" : "2rem",
                                }}
                            >
                                {/* Icon Cell */}
                                <TableCell align="center" sx={{ borderBottom: "none", padding: "6px" }}>
                                    {row.icon}
                                </TableCell>

                                {/* Label Cell */}
                                <TableCell align="right" sx={{ borderBottom: "none", padding: "6px" }}>
                                    <Typography>{row.label}</Typography>
                                </TableCell>

                                {/* Value Cell with Expand Button */}
                                <TableCell
                                    align="right"
                                    sx={{
                                        borderBottom: "none",
                                        padding: "6px",
                                        position: "relative",
                                        color: "text.primary",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            whiteSpace: isExpanded ? "normal" : "nowrap",
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: isExpanded ? "none" : 1,
                                        }}
                                    >
                                        {getDisplayText(row.value, isExpanded)}
                                    </Typography>

                                    {expandable && (
                                        <IconButton
                                            onClick={() => handleRowToggle(index)}
                                            size="small"
                                            sx={{
                                                position: "absolute",
                                                left: 0,
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                            }}
                                        >
                                            <ExpandMoreIcon sx={{ color: iconColor }} />
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
};

export default SmaTaskTable;
