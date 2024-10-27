import React from "react";
import { Button } from "@mui/material";
import SmaTaskTable from "./SmaTaskTable";
import DescriptionIcon from '@mui/icons-material/Description';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

// Main Page Component
const SmaTaskPage = () => {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <GrayBox />
                <TitleBar title="عنوان" />
                <DataContainer />
                <ActionButton />
            </div>
        </div>
    );
}

// Gray Box Component
const GrayBox = () => (
    <div style={styles.grayBox}></div>
);

// Title Bar Component
const TitleBar = ({ title }) => (
    <div style={styles.titleBar}>
        <h3>{title}</h3>
        <div>
            <Button variant="outlined" color="secondary" style={{ marginRight: "10px" }}>ویرایش</Button>
            <Button variant="contained" color="error">حذف</Button>
        </div>
    </div>
);

// Data Container Component
const DataContainer = () => (
    <div style={styles.dataContainer}>
        <div style={styles.tableContainer}>
            <SmaTaskTable />
        </div>
        <MemberSection />
        <ReportsSection />
    </div>
);

// Member Section Component
const MemberSection = () => (
    <SectionContainer title="مسئولین" buttonLabel="ویرایش مسئولین" buttonIcon={<CreateIcon />}>
        <div style={styles.memberContainer}>
            <div style={styles.memberItem}>تست</div>
        </div>
    </SectionContainer>
);

// Reports Section Component
const ReportsSection = () => (
    <SectionContainer title="گزارش‌ها" buttonLabel="اضافه کردن گزارش" buttonIcon={<AddIcon />}>
        <div style={styles.reportsContainer}>
            <div style={styles.reportItem}>تست</div>
        </div>
    </SectionContainer>
);

// Reusable Section Container Component
const SectionContainer = ({ title, buttonLabel, buttonIcon, children }) => (
    <div>
        <div style={styles.sectionBar}>
            <h4>{title}</h4>
            <Button variant="text" color="secondary" style={{ marginRight: "10px" }} startIcon={buttonIcon}>
                {buttonLabel}
            </Button>
        </div>
        {children}
    </div>
);

// Action Button Component
const ActionButton = () => (
    <div style={styles.actionButtonContainer}>
        <Button variant="contained" color="warning" fullWidth>انجام کار</Button>
    </div>
);

// Styles
const styles = {
    page: {
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
    },
    container: {
        display: "grid",
        gridTemplateRows: "1fr auto 2fr auto",
        gap: "10px",
        width: "calc(100% - 10%)",
        maxWidth: "800px",
        height: "calc(100% - 10%)",
        maxHeight: "600px",
        backgroundColor: "#fff",
        borderRadius: "20px",
    },
    grayBox: {
        backgroundColor: "#ccc",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
    },
    titleBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
    },
    dataContainer: {
        overflowY: "auto",
    },
    tableContainer: {
        height: "100%",
        overflowY: "auto",
        margin: "0 10px",
        padding: "5px",
        borderRadius: "1rem",
        border: "solid 1px gray",
    },
    sectionBar: {
        backgroundColor: "#FEEFEA",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        margin: "10px 0",
    },
    memberContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: "1rem",
        margin: "1rem",
    },
    reportsContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "1rem",
        margin: "1rem",
    },
    memberItem: {
        backgroundColor: "#F3F3F3",
        height: "3rem",
        textAlign: "center",
    },
    reportItem: {
        backgroundColor: "#F3F3F3",
        height: "4rem",
        textAlign: "center",
    },
    actionButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    },
};

export default SmaTaskPage;