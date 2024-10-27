import React from "react";
import AddIcon from '@mui/icons-material/Add';
import SectionContainer from "./SectionContainer";

// Reports Section Component
const ReportsSection = () => {
    return(
    <SectionContainer title="گزارش‌ها" buttonLabel="اضافه کردن گزارش" buttonIcon={<AddIcon />}>
        <div style={styles.reportsContainer}>
            <div style={styles.reportItem}>تست</div>
        </div>
    </SectionContainer>
    )
};

const styles = {
    reportsContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "1rem",
        margin: "1rem",
    },
    reportItem: {
        backgroundColor: "#F3F3F3",
        height: "4rem",
        textAlign: "center",
    }
};

export default ReportsSection;