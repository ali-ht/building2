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

    // Data rows for the table
    const rows = [
        { label: 'طبقه', value: '۷', icon: <LayersIcon color="secondary" /> },
        { label: 'پروژه', value: 'بعثت تا ظهور / اسب‌سوار', icon: <WorkOutlineIcon color="secondary" /> },
        { label: 'تعریف کننده', value: 'دکتر', icon: <PersonIcon color="secondary" /> },
        { label: 'توضیحات', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <DescriptionIcon color="secondary" /> },
        { label: 'پیش نیاز', value: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ...', icon: <NoteAddIcon color="secondary" /> },
        { label: 'پیوست', value: 'productspec.word', icon: <AttachFileIcon color="secondary" /> },
    ];

    // Toggles row expansion for details
    const handleRowToggle = (index) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Truncate long text if row is not expanded
    const getDisplayText = (text, isExpanded) => {
        const maxLength = 40;
        return isExpanded || text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
    };

    // Determines if a row is expandable
    const isRowExpandable = (label) => label === 'توضیحات' || label === 'پیش نیاز';

    return (
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table aria-label="SmaTaskTable">
                <TableBody>
                    {rows.map((row, index) => {
                        const isExpanded = expandedRows[index];
                        const expandable = isRowExpandable(row.label);

                        return (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "#fff" : "#f0f0f0",
                                    height: isExpanded ? "auto" : "2rem",
                                }}
                            >
                                {/* Icon Cell */}
                                <TableCell align="center" style={{ borderBottom: "none", padding: "6px" }}>
                                    {row.icon}
                                </TableCell>

                                {/* Label Cell */}
                                <TableCell align="right" style={{ borderBottom: "none", padding: "6px" }}>
                                    <Typography>{row.label}</Typography>
                                </TableCell>

                                {/* Value Cell with Expand Button */}
                                <TableCell align="right" style={{ borderBottom: "none", padding: "6px", position: "relative" }}>
                                    <Typography
                                        style={{
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
                                            style={{
                                                position: "absolute",
                                                left: 0,
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
