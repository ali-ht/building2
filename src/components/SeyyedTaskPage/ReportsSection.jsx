import React from "react";
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from "./SectionContainer";

// Data Array
const reports = [
    { id: 1, title: "گزارش اول", date: "۱۴۰۲/۰۸/۰۷", text: "این یک متن آزمایشی برای گزارش اول است." },
    { id: 2, title: "گزارش دوم", date: "۱۴۰۲/۰۸/۰۸", text: "این یک متن آزمایشی برای گزارش دوم است." },
    { id: 3, title: "گزارش سوم", date: "۱۴۰۲/۰۸/۰۹", text: "این یک متن آزمایشی برای گزارش سوم است." }
];

// Reports Section Component
const ReportsSection = () => {
    return(
        <SectionContainer title="گزارش‌ها" buttonLabel="اضافه کردن گزارش" buttonIcon={<AddIcon />}>
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
