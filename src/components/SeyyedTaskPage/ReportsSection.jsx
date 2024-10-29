import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from "./SectionContainer";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// Data Array
const initialReports = [
    { id: 1, title: "گزارش اول", date: "۱۴۰۲/۰۸/۰۷", text: "این یک متن آزمایشی برای گزارش اول است." },
    { id: 2, title: "گزارش دوم", date: "۱۴۰۲/۰۸/۰۸", text: "این یک متن آزمایشی برای گزارش دوم است." },
    { id: 3, title: "گزارش سوم", date: "۱۴۰۲/۰۸/۰۹", text: "این یک متن آزمایشی برای گزارش سوم است." }
];

// Reports Section Component
const ReportsSection = () => {
    const [reports, setReports] = useState(initialReports);
    const [open, setOpen] = useState(false);
    const [newReport, setNewReport] = useState({ title: "", date: "", text: "" });

    // Handlers
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setNewReport({ ...newReport, [e.target.name]: e.target.value });
    };

    const handleAddReport = () => {
        setReports([...reports, { ...newReport, id: reports.length + 1 }]);
        setNewReport({ title: "", date: "", text: "" });
        handleClose();
    };

    return (
        <SectionContainer title="گزارش‌ها" buttonLabel="اضافه کردن گزارش" buttonIcon={<AddIcon />} onButtonClick={handleOpen}>
            <div style={styles.reportsContainer}>
                {reports.map((report) => (
                    <div key={report.id} style={styles.reportItem}>
                        <div style={styles.reportInfo}>
                            <div>عنوان: {report.title}</div>
                            <div>تاریخ: {report.date}</div>
                        </div>
                        <div style={styles.reportText}>{report.text}</div>
                    </div>
                ))}
            </div>

            {/* Dialog for adding new report */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>افزودن گزارش جدید</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="عنوان گزارش"
                        type="text"
                        fullWidth
                        value={newReport.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        label="تاریخ"
                        type="text"
                        fullWidth
                        value={newReport.date}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="text"
                        label="متن گزارش"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={newReport.text}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">لغو</Button>
                    <Button onClick={handleAddReport} color="primary">افزودن</Button>
                </DialogActions>
            </Dialog>
        </SectionContainer>
    );
};

// Styles
const styles = {
    reportsContainer: {
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: "1rem",
        margin: "1rem",
    },
    reportItem: {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        backgroundColor: "#F3F3F3",
        height: "4rem",
        textAlign: "center",
        alignItems: "center",
    },
    reportInfo: {
        padding: "0.5rem",
    },
    reportText: {
        padding: "0.5rem",
    }
};

export default ReportsSection;
